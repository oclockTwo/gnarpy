import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function VoiceTable() {
  return (
    <Table>
      <TableCaption>gnarpy&#39;s voice and songs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Description</TableHead>
          <TableHead className="text-right">Audio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            gnarpy is singing pop songs.
          </TableCell>
          <TableCell className="text-right flex justify-end">
            <audio controls>
              <source src="/audio/gnarpy-voice-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            gnarpy is singing for you.
          </TableCell>
          <TableCell className="text-right flex justify-end">
            <audio controls>
              <source src="/audio/gnarpy-voice-2.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">
            Gnarpy is teaching you Japanese.
          </TableCell>
          <TableCell className="text-right flex justify-end">
            <audio controls>
              <source src="/audio/gnarpy-voice-3.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
