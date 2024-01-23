import { InstagramIcon, YoutubeIcon } from "@/ui/icons";

export default function Social({dict}: {dict: any}) {
  return (
    <div className="ct-flex-col gap-2">
      <span className="text-opposite font-medium">{dict.cta}</span>
      <div className="ct-flex-col w-full">
        <a href="" className="btn-social-sidebar tiktok-style">
          TikTok
        </a>
        <a href="" className="btn-social-sidebar instagram-style">
          Instagram
        </a>
        <a href="" className="btn-social-sidebar youtube-style">
          Youtube
        </a>
      </div>
    </div>
  );
}
