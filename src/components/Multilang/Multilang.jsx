'use client';
import {usePathname, useRouter} from '@/navigation';
import {useLocale} from 'next-intl';
 

export default function Multilang() {
  const pathname = usePathname();
  const route = useRouter();
  const locale = useLocale();

  const handleChange = (e) => {
    route.replace(pathname, {locale: `${e.target.value}`});
  }
  return (
    <select
      className="cursor-default whitespace-pre border-gray-200 normal-case h-[1.75rem] mt-1"
      onChange={handleChange}
      value={locale}
    >
      <option
        value="en"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇺🇸 English
      </option>
      <option
        value="es"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇪🇸 Español Russian 
      </option>
      <option
        value="zh"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇨🇳 中文
      </option>
      {/* <option
        value="ar"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇪🇬 اَلْعَرَبِيَّةُ
      </option> */}
      <option
        value="ja"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇯🇵 日本語
      </option>
      {/* <option
        value="bn"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇧🇩 বাংলা
      </option> */}
      {/* <option
        value="cs"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇨🇿 čeština
      </option> */}
      <option
        value="de"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇩🇪 Deutsch
      </option>
      {/* <option
        value="el"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇬🇷 Ελληνικά
      </option> */}
      {/* <option
        value="fi"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇫🇮 suomi
      </option> */}
      <option
        value="fr"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇫🇷 Français
      </option>
      {/* <option
        value="he"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇮🇱 עברית
      </option> */}
      {/* <option
        value="hi"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇮🇳 हिन्दी
      </option> */}
      {/* <option
        value="hu"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇭🇺 magyar
      </option> */}
      {/* <option
        value="id"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇮🇩 Bahasa Indonesia
      </option> */}
      {/* <option
        value="it"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇮🇹 Italiano
      </option> */}
      <option
        value="ko"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇰🇷 한국어
      </option>
      {/* <option
        value="ms"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇲🇾 Bahasa Melayu
      </option> */}
      {/* <option
        value="nl"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇳🇱 Nederlands
      </option> */}
      {/* <option
        value="pl"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇵🇱 Polski
      </option> */}
      <option
        value="pt"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇧🇷 Português
      </option>
      {/* <option
        value="ro"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇷🇴 Română
      </option> */}
      <option
        value="ru"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇷🇺 Русский
      </option>
      {/* <option
        value="sv"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇸🇪 Svenska
      </option> */}
      {/* <option
        value="th"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇹🇭 ไทย
      </option> */}
      {/* <option
        value="tr"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇹🇷 Türkçe
      </option> */}
      {/* <option
        value="uk"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇺🇦 Українська
      </option> */}
      {/* <option
        value="ur"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇵🇰 اردو
      </option> */}
      <option
        value="vi"
        className="whitespace-nowrap border-0 border-solid border-gray-200 text-neutral-800"
      >
        🇻🇳 Tiếng Việt
      </option>
    </select>
  );
}
