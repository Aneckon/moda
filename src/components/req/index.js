import qs from 'qs'
import axios from 'axios';

const URL = process.env.host

const query = qs.stringify({
  populate: [
    'Content.background',
    'Content.image',
    'Content.icon',
    'Content.contact_us',
    'Content.description',
    'Content.description.image',
    'Content.button',
    'Content.button.icon',
    'Content.list',
    'Content.list.icon',
    'Content.cards',
    'Content.cards.icon',
    'Content.special_offer',
    'Content.special_offer.background',
    'Content.list_1',
    'Content.list_1.icon',
    'Content.list_2',
    'Content.list_2.icon',
    'Content.info',
    'Content.info.icon',
    'Content.ticket_button',
    'Content.partners_logo',
    'Content.pay_method',
    'Content.pay_method.image',
    'Content.pay_method.description',
    'Content.feedback_card',
    'Content.title',
    'Content.subtitle',
    'Content.description_images',
    'Content.description_images.icon',
    'Content.counters',
    'Content.collage_photos',
    'Content.dropdown',
    'Content.dropdown.dropdown_list',
    'Content.dropdown.icon',
    'Content.dropdown.dropdown_list.icon',
    'Content.partners',
    'Content.feedback_cards',
    'Content.photo_1',
    'Content.photo_2',
    'Content.video_1',
    'Content.video_2',
    'Content.contact_us',
    'Content.contact_us.contacts',
    'Content.contact_us.contacts.icon',
    'Content.follow_us',
    'Content.follow_us.socials',
    'Content.follow_us.socials.icon',
  ],
}, {
  encodeValuesOnly: true, // prettify URL
});

const headerQuery = qs.stringify({
  populate: [
    'logo',
    'items',
    'button',
    'button.icon',
  ],
}, {
  encodeValuesOnly: true, // prettify URL
});

const footerQuery = qs.stringify({
  populate: [
    'logo',
    'socials',
    'socials.icon',
    'button',
    'button.icon',
  ],
}, {
  encodeValuesOnly: true, // prettify URL
});

const getPageComponents = async () => {
  const res = await axios.get(`${URL}/api/modadonna-pmu?${query}`);

  return res;
}

export const getHeader = async () => {
  const res = await axios.get(`${URL}/api/header?${headerQuery}`);

  return res;
}

export const getFooter = async () => {
  const res = await axios.get(`${URL}/api/footer?${footerQuery}`);
  
  return res;
}

export default getPageComponents
