import { Treatment } from '../types';
import exosomesImage from '../assets/images/Exosomes_2.jpg';
import exosomesWithMassageImage from '../assets/images/Exosomes.jpg';
import ledTherapyImage from '../assets/images/LED Light Therapy.jpg';
import environImage from '../assets/images/Environ.jpg';
import antiWrinkleImage from '../assets/images/Anti-Wrinkle Treatment.jpg'; // TODO: Rename image file to Botox.jpg
import lipEnhancementImage from '../assets/images/Lip Enhancement.jpg';
import dermalFillersImage from '../assets/images/Dermal Fillers.avif';

export const treatments: Treatment[] = [
  {
    id: '4',
    name: 'Vivace RF Microneedling with Exosomes and Remedial Massage',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'Vivace RF with Exosomes, enhanced by a remedial massage, is the signature experience at Beyond the Face. This advanced treatment rejuvenates the skin, restoring a noticeably more youthful appearance. It is particularly effective for thin, sagging skin – especially around the lower face, jawline, and neck – helping to prevent further ageing by lifting, firming, and tightening the skin.',
    expectedResults: 'Reduced appearance of scars, wrinkles, and enlarged pores. Improved skin texture and firmness.',
    duration: '150 minutes',
    recovery: 'Immediate results. No downtime. Up to 24hrs slight redness',
    price: '500',
    image: exosomesWithMassageImage
  },
  {
    id: '7',
    name: 'Vivace RF Microneedling with Exosomes',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'Vivace RF with Exosomes is a treatment that rejuvenates the skin, restoring a noticeably more youthful appearance. It is particularly effective for thin, sagging skin – especially around the lower face, jawline, and neck – helping to prevent further ageing by lifting, firming, and tightening the skin.',
    expectedResults: 'Reduced appearance of scars, wrinkles, and enlarged pores. Improved skin texture and firmness.',
    duration: '90 minutes',
    recovery: 'Immediate results. No downtime. Up to 24hrs slight redness',
    price: '400',
    image: exosomesImage
  },
  {
    id: '3',
    name: 'Environ / Theraderm Skin Peel',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'Environ’s pioneering Dual Electro-Sonic Technology sets the benchmark for professional skincare treatments. Low frequency Sonophoresis together with pulsed Iontophoresis in combination with Environ’s professional skincare formulations, help to deliver what skin needs, where it needs it most – making a real lasting difference. Theraderm Skin Peel provides a deeper exfoliation to reveal smoother, brighter skin.',
    expectedResults: 'Improved skin texture, clarity, and radiance. Addresses specific skin concerns like ageing, pigmentation, or acne.',
    duration: '60-75 minutes',
    recovery: 'Minimal downtime, possible slight redness for a few hours.',
    price: '150',
    image: environImage
  },
  {
    id: '5',
    name: 'LED Light Therapy',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'LED Light Therapy\nLEM Low-Level Light Therapy Device\nThe LEM is an advanced LED therapy device featuring red, blue, and yellow light settings, which can be used individually or in combination. It serves as an effective adjunct treatment for a range of skin rejuvenation concerns, including acne, pigmentation issues, and wound healing. It is also beneficial in supporting hair regrowth therapies.',
    expectedResults: 'Improved skin tone, reduced inflammation, and accelerated healing. Best results after a series of treatments.',
    duration: '20 minutes',
    recovery: 'No downtime required.',
    price: '50',
    image: ledTherapyImage
  },
  {
    id: '8',
    name: 'Remedial Massage',
    category: 'Lifting and Tightening Skin Treatments',
    description: 'A therapeutic massage technique that focuses on treating injured, sore or dysfunctional muscles. This specialized massage helps to stimulate circulation, improve lymphatic drainage, and promote skin rejuvenation while providing deep relaxation and stress relief.',
    expectedResults: 'Improved circulation, reduced muscle tension, enhanced skin tone, and overall relaxation.',
    duration: '30 minutes',
    recovery: 'No downtime required. Drink plenty of water after treatment.',
    price: '50',
    image: 'https://ik.imagekit.io/boostkit/Beyond%20The%20Face/Massage.avif?updatedAt=1745947769415'
  },
  {
    id: '1',
    name: 'Botox',
    category: 'Injectables',
    description: 'This treatment works by relaxing specific facial muscles responsible for the formation of fine lines and wrinkles, particularly on the forehead and around the eyes. By reducing muscle movement in targeted areas, it helps create a smoother, more youthful appearance.',
    expectedResults: 'Visible reduction in fine lines and wrinkles, with results typically lasting 3–4 months.',
    duration: '30 minutes',
    recovery: 'No downtime required. Avoid lying down for 4 hours after treatment.',
    price: '300',
    image: antiWrinkleImage
  },
  {
    id: '6',
    name: 'Lip Enhancement',
    category: 'Injectables',
    description: 'Lip fillers are injectable treatments that add volume to the lips, enhancing their shape, structure, and size.',
    expectedResults: 'Fuller, more defined lips with improved symmetry. Results last 6-12 months.',
    duration: '30 minutes',
    recovery: 'Common side effects: swelling, bruising, tenderness. Allow 4-7 days for healing and recovery.',
    price: '250',
    image: lipEnhancementImage
  },
  {
    id: '11',
    name: 'Dermal Fillers',
    category: 'Injectables',
    description: 'Dermal fillers help to diminish facial lines and restore volume and fullness in the face. As we age, our faces naturally lose subcutaneous fat. Dermal fillers can be used to plump thin lips, enhance shallow contours, soften facial creases and wrinkles, and improve the appearance of recessed scars.',
    expectedResults: 'Restored volume, smoothed lines, and enhanced facial contours. Results can last from 6 months to over a year, depending on the filler used.',
    duration: '45-60 minutes',
    recovery: 'Some swelling, bruising, or redness may occur, typically subsiding within a few days.',
    price: '380',
    image: dermalFillersImage
  }
];

export const categories = ['Lifting and Tightening Skin Treatments', 'Injectables'];