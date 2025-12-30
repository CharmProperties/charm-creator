import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface LeadNotificationRequest {
  fullName: string;
  email: string;
  phone: string;
  marketingConsent: boolean;
  orderConsent: boolean;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { fullName, email, phone, marketingConsent, orderConsent }: LeadNotificationRequest = await req.json();

    console.log("Received lead notification request:", { fullName, email, phone });

    // Send notification email to admin
    const emailResponse = await resend.emails.send({
      from: "Charm Properties <onboarding@resend.dev>",
      to: ["info@charm.properties"], // Change this to your email
      subject: `🏠 New Lead: ${fullName} wants to sell their property!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #152536; padding: 30px; text-align: center;">
            <h1 style="color: #30b5ab; margin: 0;">New Lead Alert! 🎉</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f8f9fa;">
            <h2 style="color: #152536; margin-top: 0;">Lead Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #495057;">Full Name:</td>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; color: #212529;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #495057;">Email:</td>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; color: #212529;">
                  <a href="mailto:${email}" style="color: #30b5ab;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #495057;">Phone:</td>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; color: #212529;">
                  <a href="tel:${phone}" style="color: #30b5ab;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; font-weight: bold; color: #495057;">Marketing Consent:</td>
                <td style="padding: 12px; border-bottom: 1px solid #dee2e6; color: #212529;">${marketingConsent ? "✅ Yes" : "❌ No"}</td>
              </tr>
              <tr>
                <td style="padding: 12px; font-weight: bold; color: #495057;">Order Updates Consent:</td>
                <td style="padding: 12px; color: #212529;">${orderConsent ? "✅ Yes" : "❌ No"}</td>
              </tr>
            </table>
            
            <div style="margin-top: 30px; padding: 20px; background-color: #30b5ab; border-radius: 8px; text-align: center;">
              <p style="color: white; margin: 0; font-size: 16px;">
                <strong>Action Required:</strong> Contact this lead within 24 hours!
              </p>
            </div>
          </div>
          
          <div style="padding: 20px; background-color: #152536; text-align: center;">
            <p style="color: #adb5bd; margin: 0; font-size: 12px;">
              This is an automated notification from Charm Properties
            </p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-lead-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
