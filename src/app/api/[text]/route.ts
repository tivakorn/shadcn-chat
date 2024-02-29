import {NextRequest, NextResponse} from "next/server";

import { detectTextIntent } from '../../../lib/dialogflow'

export async function GET (request: NextRequest, { params }: { params: { text: string } }){

    const textResult = await detectTextIntent(params.text)

    return NextResponse.json({ text: textResult})
}