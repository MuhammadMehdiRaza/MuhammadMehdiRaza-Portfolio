import { NextRequest, NextResponse } from "next/server";

// Contact form API route - sends email using Web3Forms (free, no backend needed)
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required" },
                { status: 400 }
            );
        }

        // Send email using Web3Forms API (free tier: 250 emails/month)
        // You'll need to get your access key from https://web3forms.com/
        const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: WEB3FORMS_ACCESS_KEY,
                name: name,
                email: email,
                subject: subject || "New Contact Form Submission",
                message: message,
                from_name: "Portfolio Contact Form",
            }),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json(
                { success: true, message: "Message sent successfully!" },
                { status: 200 }
            );
        } else {
            return NextResponse.json(
                { error: "Failed to send message. Please try again." },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "An error occurred. Please try again later." },
            { status: 500 }
        );
    }
}
