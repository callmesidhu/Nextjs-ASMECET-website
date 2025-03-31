// @/src/components/UpcomingEvents.tsx
"use client"; // Add this line at the top

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebaseConfig'; // Import the initialized Firestore instance
import Image from 'next/image';

interface Event {
  id: string;
  eventDate: Date;
  eventImageUrl: string;
  eventName: string;
  eventDescription: string;
  eventTime: string;
  eventType: string;
}

const UpcomingEvents = () => {
  const router = useRouter();
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    const eventsCollection = collection(db, 'Events');
    const eventsSnapshot = await getDocs(eventsCollection);
    const eventsList = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Event));

    const now = new Date();
    const upcoming = eventsList.filter(event => new Date(event.eventDate) >= now);

    setUpcomingEvents(upcoming);
    setLoading(false);
  };

  const handleEventClick = (eventId: string) => {
    router.push(`/register/${eventId}`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(UpcomingEvents);

  return (
    <div className="w-full flex flex-col items-center p-6 mt-5 rounded shadow-md">
      <h2 className="text-6xl font-bold my-4">Upcoming Events</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map(event => (
            <li
              key={event.id}
              className="border rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 duration-[500ms]"
              onClick={() => handleEventClick(event.id)}
            >
              <div className="relative w-full h-48">
                <Image
                  src={event.eventImageUrl}
                  alt={event.eventName}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{event.eventName}</h3>
                <p className="text-gray-200 mb-4">{event.eventDescription}</p>
                <div className="text-gray-300 text-sm">
                  <p>{new Date(event.eventDate).toLocaleDateString()} {event.eventTime}</p>
                  <p>{event.eventType === 'online' ? 'Online' : 'Offline'}</p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <div className="text-white text-lg col-span-full mt-6">
            New events will be published soon
          </div>
        )}
      </ul>
    </div>
  );
};

export default UpcomingEvents;