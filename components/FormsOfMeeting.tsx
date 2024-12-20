'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import HomeMeetingCards from './MeetingCards'
import { useRouter } from 'next/navigation'

const FormsOfMeeting = () => {
    const router = useRouter();
    const [meetingState, setMeetingState] = useState<
      "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
    >(undefined);
  return (
    <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      <HomeMeetingCards
        img="/icons/add-meeting.svg"
        title="New Meeting"
        description="Start an instant meeting"
        className='bg-orange-1'
        handleClick={() => setMeetingState("isInstantMeeting")}
      />
      <HomeMeetingCards
        img="/icons/join-meeting.svg"
        title="Join Meeting"
        description="via invitation link"
        className="bg-blue-1"
        handleClick={() => setMeetingState("isJoiningMeeting")}
      />
      <HomeMeetingCards
        img="/icons/schedule.svg"
        title="Schedule Meeting"
        description="Plan your meeting"
        className="bg-purple-1"
        handleClick={() => setMeetingState("isScheduleMeeting")}
      />
      <HomeMeetingCards
        img="/icons/recordings.svg"
        title="View Recordings"
        description="Meeting Recordings"
        className="bg-yellow-1"
        handleClick={() => router.push("/recordings")}
      />
    </section>
  );
}

export default FormsOfMeeting