import React, { useEffect, useState } from 'react'

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const tick = () => setNow(new Date())
    const cleanupRefs = { interval: null }

    const initial = new Date()
    const msUntilNextMinute = 60000 - (initial.getSeconds() * 1000 + initial.getMilliseconds())

    const timeoutId = setTimeout(() => {
      tick()
      cleanupRefs.interval = setInterval(tick, 60000)
    }, msUntilNextMinute)

    return () => {
      clearTimeout(timeoutId)
      if (cleanupRefs.interval) clearInterval(cleanupRefs.interval)
    }
  }, [])

  const weekday = new Intl.DateTimeFormat('en', { weekday: 'long' }).format(now).toLowerCase()
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(now).toLowerCase()
  const day = now.getDate()
  const time = new Intl.DateTimeFormat('en', { hour: 'numeric', minute: '2-digit', hour12: true }).format(now)

  return <div>{`${weekday} ${month} ${day} ${time}`}</div>
}

export default DateTime