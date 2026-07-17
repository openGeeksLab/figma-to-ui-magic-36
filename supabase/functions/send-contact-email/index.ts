import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  productDetails?: {
    productName?: string;
    surfaceTreatment?: string;
    dimension?: string;
    colorName?: string;
    length?: string;
    width?: string;
    square?: string;
    estimatedPrice?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, productDetails }: ContactEmailRequest = await req.json();

    console.log("Processing contact form submission:", { name, email, phone });

    // Send confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting us!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <h1 style="color: #454545; font-size: 28px; margin-bottom: 20px;">Thank you for your message, ${name}!</h1>
            <p style="color: #666; font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              We have received your message and will get back to you within 24 hours with the latest product information and business opportunities.
            </p>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #454545; margin-bottom: 10px;">Your Message:</h3>
              <p style="color: #666; font-style: italic;">"${message}"</p>
            </div>
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              Best regards,<br>
              The Team
            </p>
          </div>
        </div>
      `,
    });

    // Send notification email to admin (using the same email for demo)
    const adminEmailResponse = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: ["drudeveldvurech@gmail.com", "info@nordicthermotra.se"], // Replace with your actual admin email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #454545;">New Contact Form Submission</h1>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${productDetails ? `
            <h3 style="color: #454545; margin-top: 20px;">Product Details:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-radius: 5px; margin: 10px 0;">
              ${productDetails.productName ? `<p><strong>Product:</strong> ${productDetails.productName}</p>` : ''}
              ${productDetails.surfaceTreatment ? `<p><strong>Surface Treatment:</strong> ${productDetails.surfaceTreatment}</p>` : ''}
              ${productDetails.dimension ? `<p><strong>Dimension:</strong> ${productDetails.dimension}</p>` : ''}
              ${productDetails.colorName ? `<p><strong>Color:</strong> ${productDetails.colorName}</p>` : ''}
              ${productDetails.length ? `<p><strong>Length:</strong> ${productDetails.length} mm</p>` : ''}
              ${productDetails.width ? `<p><strong>Width:</strong> ${productDetails.width} mm</p>` : ''}
              ${productDetails.square ? `<p><strong>Square Meters:</strong> ${productDetails.square} m²</p>` : ''}
              ${productDetails.estimatedPrice ? `<p><strong>Estimated Price:</strong> ${productDetails.estimatedPrice}</p>` : ''}
            </div>
            ` : ''}
            <p><strong>Message:</strong></p>
            <p style="background-color: white; padding: 15px; border-radius: 5px; border-left: 4px solid #DCB481;">${message}</p>
          </div>
          <p style="color: #666; font-size: 14px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
        </div>
      `,
    });

    console.log("Emails sent successfully:", { 
      customer: customerEmailResponse, 
      admin: adminEmailResponse 
    });

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }), 
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);