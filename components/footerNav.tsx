import siteConfig from "@/contants/siteConfig";
import Image from "next/image";
import socialIconMeetup from "@/public/social-icon-meetup.svg";
import socialIconInstagram from "@/public/social-icon-instagram.svg";
import socialIconFacebook from "@/public/social-icon-facebook.svg";

const ICON_SIZE = 40;

export default function FooterNav() {
    return (<nav>
        <ul></ul>
        <ul>
            <li><a href={siteConfig.MEETUP_GROUP_URL} target="_blank">
                <Image
                    priority
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    src={socialIconMeetup}
                    alt="Follow us on Meetup"
                />
            </a></li>
            <li><a href={siteConfig.INSTAGRAM_URL} target="_blank">
                <Image
                    priority
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    src={socialIconInstagram}
                    alt="Follow us on Instagram"
                />
            </a></li>
            <li><a href={siteConfig.FACEBOOK_URL} target="_blank">
                <Image
                    priority
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                    src={socialIconFacebook}
                    alt="Follow us on Facebook"
                />
            </a></li>
        </ul>
        <ul></ul>
    </nav>);
}