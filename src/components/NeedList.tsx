interface NeedListProps {
  text: string
}

export default function Input({ text }: NeedListProps) {
  return (
    <div className="bg-blue p-5">
      {text}
      {/* here needs to go the need list coming from database */}
    </div>
  )
}
