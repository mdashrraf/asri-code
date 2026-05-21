import { memo } from "react"

interface AnnouncementProps {
	hideAnnouncement: () => void
}

const Announcement = (_props: AnnouncementProps) => null

export default memo(Announcement)
