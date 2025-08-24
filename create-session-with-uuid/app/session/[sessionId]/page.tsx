"use client"
import { useParams } from "next/navigation"

export default function Session(){
    const params = useParams()
    const sessionId = params.sessionId
    return (
        <div>
            room {sessionId}
        </div>
    )
}