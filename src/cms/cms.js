import CMS, { init } from 'decap-cms-app'

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import HomePagePreview from "./preview-templates/HomePagePreview";
import MeetupPreview from "./preview-templates/MeetupPreview";
import FooterPreview from "./preview-templates/FooterPreview";
import NavbarPreview from "./preview-templates/NavbarPreview";
import PastMeetupsPagePreview from "./preview-templates/PastMeetupsPagePreview";

init();

CMS.registerPreviewTemplate("meetups", MeetupPreview);
CMS.registerPreviewTemplate("footer", FooterPreview);
CMS.registerPreviewTemplate("navbar", NavbarPreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("home", HomePagePreview);
CMS.registerPreviewTemplate("pastMeetups", PastMeetupsPagePreview);
