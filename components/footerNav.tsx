import siteConfig from "@/contants/siteConfig";
import Image from "next/image";
import socialIconMeetup from "@/public/social-icon-meetup.svg";
import socialIconInstagram from "@/public/social-icon-instagram.svg";
import socialIconFacebook from "@/public/social-icon-facebook.svg";
import socialIconStrava from "@/public/social-icon-strava.svg";

const ICON_SIZE = 38;

export default function FooterNav() {
    return (<nav>
        <ul></ul>
        <ul>
            <li><a href={siteConfig.MEETUP_GROUP_URL} target="_blank" title="Follow us on Meetup">
                <Image
                    priority
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    src={socialIconMeetup}
                    alt="Meetup Icon"
                />
            </a></li>
            <li><a href={siteConfig.INSTAGRAM_URL} target="_blank" title="Follow us on Instagram">
                <Image
                    priority
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    src={socialIconInstagram}
                    alt="Instagram Icon"
                />
            </a></li>
            <li><a href={siteConfig.FACEBOOK_URL} target="_blank" title="Follow us on Facebook">
                <Image
                    priority
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    src={socialIconFacebook}
                    alt="Facebook Icon"
                />
            </a></li>
            <li><a href={siteConfig.STRAVA_URL} target="_blank" title="Follow us on Strava">
                <Image
                    priority
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    src={socialIconStrava}
                    alt="Strava Icon"
                />
            </a></li>
        </ul>
        <ul></ul>
    </nav>);
}