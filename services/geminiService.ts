import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Initialize the Gemini AI client
// Note: In a real production app, you might want to proxy this through a backend to hide the key,
// but for this client-side demo, we use the env var directly as per instructions.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for "House of Dentistry Multispeciality Dental Clinic" in Quepem, Goa, led by Dr. Mayank Karmalker.
Your tone is warm, professional, calming, and helpful.

Key Information:
- Dentist: Dr. Mayank Karmalker (Experienced, patient-focused, gentle).
- Location: First Floor, Shop No. 3, Market, Dita Classic, Quepem, Goa – 403705.
- Phone: 094207 24106.
- Services: General Dentistry, Root Canals, Crowns & Bridges, Dentures, Cosmetic Dentistry (Whitening), Specialized Care.
- Timings: Morning open until 1:30 PM, Evening reopens at 3:30 PM.

You can answer questions about:
- General oral hygiene tips.
- Clinic services and procedures.
- Scheduling appointments (guide them to click the "Book Appointment" button or call).
- Location and timings.

Limits:
- DO NOT provide specific medical diagnoses. Always advise the user to see Dr. Mayank for a professional exam.
- If unsure, recommend booking a consultation.
- Keep responses concise (under 100 words) unless asked for details.
`;

export const sendMessageToGemini = async (message: string, history: { role: 'user' | 'model', parts: [{ text: string }] }[] = []) => {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history,
    });

    const response: GenerateContentResponse = await chat.sendMessage({
      message: message,
    });

    return response.text;
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I apologize, but I'm having trouble connecting right now. Please try again later or call our clinic directly at 094207 24106.";
  }
};

export const generateConfirmationEmail = async (details: { name: string, date: string, time: string, reason: string }) => {
  try {
    const prompt = `
      Write a warm, professional, and reassuring email confirmation for a dental appointment request at "House of Dentistry".
      
      Patient Name: ${details.name}
      Requested Date: ${details.date}
      Preferred Time: ${details.time}
      Reason for Visit: ${details.reason}
      
      Clinic Details:
      Dr. Mayank Karmalker
      Quepem, Goa
      Phone: 094207 24106
      
      The email should:
      1. Thank the patient for choosing us.
      2. Confirm that we have received their request.
      3. State that our team will call them shortly at their provided number to confirm the exact time slot.
      4. Be concise and friendly.
      
      Do not include a subject line in the body. Return only the email body text.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text;
  } catch (error) {
    console.error("Error generating email content:", error);
    return `Dear ${details.name},\n\nThank you for requesting an appointment at House of Dentistry. We have received your request for ${details.date} (${details.time}).\n\nOur team will contact you shortly to confirm your appointment time.\n\nWarm regards,\nDr. Mayank Karmalker & Team`;
  }
};