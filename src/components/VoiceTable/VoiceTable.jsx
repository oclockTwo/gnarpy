import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useTranslations } from "next-intl";

export default function VoiceTable() {
  const t = useTranslations("VoiceTablePage");
  return (
    <Table>
      <TableCaption>{t("table-description")}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">t{t("description")}</TableHead>
          <TableHead className="text-right">{t("audio")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">{t("p1")}</TableCell>
          <TableCell className="text-right flex justify-end">
            <audio controls>
              <source src="/audio/gnarpy-voice-1.mp3" type="audio/mpeg" />
              {t("error")}
            </audio>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">{t("p2")}</TableCell>
          <TableCell className="text-right flex justify-end">
            <audio controls>
              <source src="/audio/gnarpy-voice-2.mp3" type="audio/mpeg" />
              {t("error")}
            </audio>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">{t("p3")}</TableCell>
          <TableCell className="text-right flex justify-end">
            <audio controls>
              <source src="/audio/gnarpy-voice-3.mp3" type="audio/mpeg" />
              {t("error")}
            </audio>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
