export type Lang = 'pl' | 'en' | 'de';

// ===== TOP BOXES (PL: terminy+lato; EN/DE: bookings summer) =====
export const topBoxes: Record<Lang, { variant: 'pl' | 'en_de'; data: any }> = {
  pl: {
    variant: 'pl',
    data: {
      left: {
        title: 'Najbliższe wolne terminy',
        month: 'Czerwiec 2026',
        dates: '22-25 cze | domek D2',
        discount: '-10% z kodem',
        code: 'LB22CZE',
        reserve: 'Rezerwuj',
        otherDates: 'lub sprawdź inne',
        otherDatesBold: 'dostępne terminy',
        otherDatesSuffix: '(wybierając domek D1 lub D2).',
      },
      right: {
        title: 'Urlopy lato 2026',
        julyTitle: 'Wolne terminy <span class="promo-code">lipiec</span>',
        julyDates: ['3 - 9 lip | (D1)', '26 lip - 1 sie | (D1)'],
        augustTitle: 'Wolne terminy <span class="promo-code">sierpień</span>',
        augustDates: ['3 - 9 sie (D2)', '17 - 23 sie (D2)', '15 - 31 sie (D1)'],
        amenitiesTitle: 'Na miejscu',
        amenities: ['prywatne jazuzzi','sauna','balia do schładzania','grill + węgiel','hamaki','rowery','deski SUP','Wi-Fi','Netflix'],
        contactInfo: 'Aby zarezerwować pobyt prosimy o kontakt telefoniczny albo WhatsApp.',
        phone1: '789 773 285',
        phone2: '660 194 187',
      },
    },
  },
  en: {
    variant: 'en_de',
    data: {
      title: 'Bookings for July and August',
      content: 'Bookings for the summer months, i.e. <span class="promo-code">July</span><span class="promo-code">August</span>, are accepted <strong>by phone only</strong>. To check availability and make a reservation, please contact us by phone or via WhatsApp.',
    },
  },
  de: {
    variant: 'en_de',
    data: {
      title: 'Reservierungen für Juli und August',
      content: 'Reservierungen für die Sommermonate, d. h. <span class="promo-code">Juli</span><span class="promo-code">August</span>, werden <strong>ausschließlich telefonisch</strong> entgegengenommen. Um die Verfügbarkeit zu prüfen und eine Buchung vorzunehmen, kontaktieren Sie uns bitte telefonisch oder über WhatsApp.',
    },
  },
};

// ===== INTRO SECTION =====
export const intro: Record<Lang, any> = {
  pl: {
    title: 'Całoroczne domki na wynajem w Puszczy Noteckiej',
    p1: 'Zapraszamy do <b>Las Biala\'s</b> - kameralnego zakątka Białej, wsi położonej nad malowniczym jeziorem, w samym sercu Puszczy Noteckiej. Z dala od miejskiego zgiełku, na dużej leśnej działce znajdują się dwa całoroczne, komfortowe domki oraz przestrzeń stworzona z myślą o dorosłych gościach, ceniących ciszę, wygodę i bliskość natury.',
    p2: 'Zadbaliśmy również o to, by pobyt sprzyjał głębokiemu relaksowi. Goście mają do dyspozycji kameralną <b>saunę</b>, prywatne <b>jacuzzi</b> oraz inne udogodnienia, które pozwalają odnaleźć własny rytm i wypocząć w ulubiony sposób. Domki są w pełni ogrzewane, a temperaturę w każdym z pomieszczeń możesz regulować indywidualnie.',
    guideBtn: 'Przewodnik',
    adultTitle: 'Domki tylko dla dorosłych (18+)',
    adultText: 'Tworzymy miejsce, które sprzyja wyciszeniu, prywatności i swobodnemu odpoczynkowi. Dlatego nasza oferta skierowana jest do osób dorosłych szukających przestrzeni, miejsca, w którym można naprawdę odetchnąć, bez kompromisów, w harmonii z naturą i samym sobą. Formuła 18+ to świadomy wybór gwarantujący spokój, relaks i prawdziwą jakość wypoczynku. Jeśli szukasz ciszy, komfortu i autentycznego resetu - jesteś u siebie.',
    badges: {
      booking: '/images/booking-awards-blue.png',
      reviews: '/images/lasbialas-opinie.png',
    },
  },
  en: {
    title: 'Cottages for Rent in the Noteć Forest',
    p1: 'Welcome to <b>Las Biala\'s</b> - <a href="https://maps.google.com/?q=Las+Biala%27s" target="_blank" style="color: #2F6940; text-decoration: none;">a cozy hideaway in the village of Biała</a>, located by a picturesque lake in the very heart of the Noteć Forest. Far from the city noise, on a spacious forest property, you will find two year-round, comfortable cottages and a space created especially for adult guests who value peace, comfort, and closeness to nature.',
    p2: 'We\'ve also made sure your stay supports deep relaxation. Guests can enjoy an intimate <b>sauna</b>, a private <b>jacuzzi</b>, and other amenities designed to help you unwind in your own way.',
    adultTitle: 'Adults-Only Cabins (18+)',
    adultText: 'We have created a place that fosters tranquility, privacy, and carefree relaxation. That\'s why our offer is dedicated to adults - those looking for a space where you can truly breathe, without compromise, in harmony with nature and yourself. The 18+ formula is a conscious choice - guaranteeing peace, relaxation, and real quality rest. If you are searching for silence, comfort, and an authentic reset - this is your place.',
    badges: {
      reviews: '/images/lasbialas-reviews.png',
    },
  },
  de: {
    title: 'Ferienhäuser zur Miete in der Puszcza Notecka',
    p1: 'Willkommen bei <b>Las Biala\'s</b> - <a href="https://maps.google.com/?q=Las+Biala%27s" target="_blank" style="color: #2F6940; text-decoration: none;">einem idyllischen Ort im Dorf Biała</a>, direkt am malerischen See im Herzen der Puszcza Notecka. Abseits vom Trubel der Stadt befinden sich auf einem großen Waldgrundstück zwei ganzjährig nutzbare, komfortable Ferienhäuser sowie ein Bereich, der speziell für erwachsene Gäste geschaffen wurde, die Ruhe, Komfort und die Nähe zur Natur schätzen.',
    p2: 'Wir haben außerdem darauf geachtet, dass der Aufenthalt tiefste Entspannung ermöglicht. Den Gästen stehen eine gemütliche <b>Sauna</b>, ein privates <b>Jacuzzi</b> sowie weitere Annehmlichkeiten zur Verfügung, damit jeder seinen eigenen Rhythmus finden und auf seine Weise entspannen kann.',
    guideBtn: 'Reiseführer',
    adultTitle: 'Nur für Erwachsene (18+)',
    adultText: 'Wir schaffen einen Ort der Ruhe, Privatsphäre und Entspannung. Unser Angebot richtet sich daher ausschließlich an Erwachsene, die einen Platz suchen, um wirklich durchzuatmen - ohne Kompromisse, im Einklang mit der Natur und mit sich selbst.<br><br>Das 18+ Konzept ist eine bewusste Entscheidung - es garantiert Stille, Entspannung und echte Qualität des Urlaubs. Wir glauben, dass Erwachsene ihren eigenen Ort verdienen: intim, bewusst und mit Intention gestaltet. Wenn Sie Ruhe, Komfort und authentische Erholung suchen - sind Sie hier genau richtig.',
    badges: {
      reviews: '/images/lasbialas-bewertungen.png',
    },
  },
};

// ===== INTERIORS SECTION =====
export const interiors: Record<Lang, any> = {
  pl: {
    title: 'Komfortowe wnętrza i pełne wyposażenie',
    intro: 'W domkach zadbaliśmy o szereg udogodnień, pełne wyposażenie i przytulne wnętrza, abyście mogli spędzić ten czas komfortowo, ciesząc się urokiem i niepowtarzalną atmosferą tego miejsca.',
    bedrooms: {
      title: 'Sypialnie',
      intro: 'Domki posiadają po dwie sypialnie usytuowane po przeciwległych stronach. W każdej sypialni znajduje się:',
      items: ['wygodne, podwójne łóżko','materac 140x200x26 cm','bawełniana pościel','moskitiery w oknach','wentylator sufitowy z pilotem','rolety zewnętrzne oraz zasłony','smart TV z Netflix w jednej sypialni'],
      images: [
        { src: '/foto/w1.webp', alt: 'Duża sypialnia z podwójnym łóżkiem', tip: 'Duża sypialnia z łóżkiem 140x200, wygodnym materacem i wentylatorem sufitowym.' },
        { src: '/foto/w2.webp', alt: 'Mała sypialnia z podwójnym łóżkiem', tip: 'Mała sypialnia z łóżkiem 140x200 i Smart TV.' },
        { src: '/foto/w6.webp', alt: 'Ogrzewanie w domku', tip: 'Niezależne termostaty sterujące ogrzewaniem w każdym pomieszczeniu.' },
        { src: '/foto/w4.webp', alt: 'Mała sypialnia w domku', tip: 'Sypialnia z łóżkiem 140x200, Smart TV i wentylatorem sufitowym.' },
      ],
    },
    living: {
      title: 'Salon z aneksem kuchennym',
      intro: 'W salonie z aneksem kuchennym znajduje się kącik wypoczynkowy, Smart TV z Netflix, biblioteczka i zestaw planszówek. <a href="https://lasbialas.pl/info/#/na-miejscu/505" target="_blank" style="color: #40a95c; text-decoration: underline;">Aneks kuchenny</a> jest w pełni wyposażony i oferuje dużą lodówkę z zamrażalnikiem, zmywarkę, toster, ekspres do kawy, płytę indukcyjną oraz wszystko, co potrzebne do wygodnego przyrządzenia posiłków i biesiadowania:',
      items: ['komplet garnków i patelni','komplety talerzy (po 6 szt.) i miseczek','kubki, szklanki, kieliszki do wina, inne','komplet sztućców i noży kuchennych','akcesoria kuchenne i do grillowania','toster, czajnik, zaparzacz do herbaty','ekspres Nespresso DeLonghi','kapsułki z kawą do ekspresu (20 szt.)','herbata, cukier, sól, pieprz'],
      images: [
        { src: '/foto/w13.webp', alt: 'Salon z aneksem kuchennym', tip: 'Przestronny salon z aneksem.' },
        { src: '/foto/w7.webp', alt: 'Aneks kuchenny', tip: 'Aneks z lodówką, zmywarką i płytą indukcyjną.' },
        { src: '/foto/w15.webp', alt: 'Kącik w salonie', tip: 'Biblioteczka i planszówki.' },
        { src: '/foto/w3.webp', alt: 'Smart TV w salonie', tip: 'Smart TV z Netflix.' },
      ],
    },
    bathroom: {
      title: 'Łazienka',
      intro: 'Nowoczesna łazienka z prysznicem walk-in i deszczownicą. Na wyposażeniu:',
      items: ['komplet ręczników','żel i szampon pod prysznic','mydło w płynie','środki czystości','papier toaletowy','suszarka do włosów','odkurzacz bezprzewodowy','suszarka na pranie','inne akcesoria'],
      images: [
        { src: '/foto/w17.webp', alt: 'Łazienka z prysznicem', tip: 'Przestronna łazienka z prysznicem walk-in.' },
        { src: '/foto/w18.webp', alt: 'Wyposażenie łazienki', tip: 'Ręczniki, środki higieniczne i akcesoria.' },
      ],
    },
    parking: { title: 'Bezpłatny parking', text: 'Przy każdym z domków dostępne są dwa miejsca parkingowe. Teren ogrodzony i oświetlony, osobna brama i furtka.' },
    guide: { title: 'Przewodnik LAS BIALA\'S', qrAlt: 'QR Kod z linkiem do przewodnika Las Bialas' },
  },
  en: {
    title: 'Comfortable Interiors & Full Equipment',
    intro: 'The cottages are equipped with a range of amenities, full furnishings, and cozy interiors to make your stay comfortable while enjoying the charm and unique atmosphere of this place.',
    bedrooms: {
      title: 'Bedrooms',
      intro: 'The cottages feature two bedrooms located on opposite sides of the house. Bedroom amenities include:',
      items: ['comfortable double beds','mattresses 140x200x26 cm','cotton bedding','mosquito nets in windows','ceiling fan with remote control','external blinds and curtains','Smart TV with Netflix in one bedroom'],
      images: [
        { src: '/foto/w1.webp', alt: 'Large bedroom with double bed', tip: 'Spacious bedroom with 140x200 bed, comfortable mattress, and ceiling fan.' },
        { src: '/foto/w2.webp', alt: 'Small bedroom with double bed', tip: 'Smaller bedroom with 140x200 bed and Smart TV.' },
        { src: '/foto/w6.webp', alt: 'Heating system in the cottage', tip: 'Independent thermostats controlling heating in each room.' },
        { src: '/foto/w4.webp', alt: 'Small bedroom in the cottage', tip: 'Bedroom with 140x200 bed, Smart TV, and ceiling fan.' },
      ],
    },
    living: {
      title: 'Living Room with Kitchenette',
      intro: 'The living room with kitchenette offers a cozy lounge area, Smart TV with Netflix, bookshelf, and board games. The kitchenette is fully equipped and includes a large fridge, dishwasher, toaster, coffee machine, and induction hob - everything you need for comfortable cooking and dining:',
      items: ['set of pots and pans','sets of plates (6 pcs) and bowls','mugs, glasses, wine glasses, and more','full set of cutlery and kitchen knives','kitchen and barbecue accessories','toaster, kettle, tea infuser','Nespresso DeLonghi coffee machine','20 coffee capsules','tea, sugar, salt, pepper'],
      images: [
        { src: '/foto/w13.webp', alt: 'Living room with kitchenette', tip: 'Spacious living room with kitchenette.' },
        { src: '/foto/w7.webp', alt: 'Kitchenette', tip: 'Kitchenette with fridge, dishwasher, and induction hob.' },
        { src: '/foto/w15.webp', alt: 'Living room corner', tip: 'Bookshelf and board games.' },
        { src: '/foto/w3.webp', alt: 'Smart TV in the living room', tip: 'Smart TV with Netflix.' },
      ],
    },
    bathroom: {
      title: 'Bathroom',
      intro: 'A modern bathroom with walk-in shower and rainfall showerhead. Amenities include:',
      items: ['set of towels','shower gel & shampoo','liquid soap','cleaning products','toilet paper','hair dryer','cordless vacuum cleaner','drying rack','other accessories'],
      images: [
        { src: '/foto/w17.webp', alt: 'Bathroom with shower', tip: 'Spacious bathroom with walk-in shower.' },
        { src: '/foto/w18.webp', alt: 'Bathroom equipment', tip: 'Towels, toiletries, and accessories.' },
      ],
    },
    parking: { title: 'Free Parking', text: 'Each cottage has two parking spaces. The area is fenced and illuminated, with a separate gate and entrance.' },
    guide: { title: 'Guidebook LAS BIALA\'S', qrAlt: 'QR code with a link to the Las Balas guest guide' },
  },
  de: {
    title: 'Komfortable Innenräume und komplette Ausstattung',
    intro: 'In den Häusern haben wir zahlreiche Annehmlichkeiten, eine vollständige Ausstattung und gemütliche Innenräume vorbereitet, damit Sie Ihren Aufenthalt komfortabel verbringen und die besondere Atmosphäre des Ortes genießen können.',
    bedrooms: {
      title: 'Schlafzimmer',
      intro: 'Die Häuser verfügen über zwei Schlafzimmer, die sich an gegenüberliegenden Seiten des Hauses befinden. Schlafzimmer-Ausstattung:',
      items: ['bequeme Doppelbetten','Matratzen 140×200×26 cm','Baumwollbettwäsche','Insektenschutzgitter an den Fenstern','Deckenventilator mit Fernbedienung','Außenrollläden und Vorhänge','Smart TV (Netflix) im Schlafzimmer'],
      images: [
        { src: '/foto/w1.webp', alt: 'Großes Schlafzimmer mit Doppelbett', tip: 'Großes Schlafzimmer mit Bett 140×200, bequemer Matratze und Deckenventilator.' },
        { src: '/foto/w2.webp', alt: 'Kleines Schlafzimmer mit Doppelbett', tip: 'Kleines Schlafzimmer mit Bett 140×200 und Smart TV.' },
        { src: '/foto/w6.webp', alt: 'Heizung im Haus', tip: 'Unabhängige Thermostate zur Heizungssteuerung in jedem Raum.' },
        { src: '/foto/w4.webp', alt: 'Kleines Schlafzimmer im Haus', tip: 'Schlafzimmer mit Bett 140×200, Smart TV und Deckenventilator.' },
      ],
    },
    living: {
      title: 'Wohnzimmer mit Küchenzeile',
      intro: 'Im Wohnzimmer mit Küchenzeile gibt es eine gemütliche Sitzecke, einen Smart TV mit Netflix, eine kleine Bibliothek und Brettspiele. Die Küchenzeile ist komplett ausgestattet und bietet einen großen Kühlschrank, eine Spülmaschine, Toaster, Kaffeemaschine sowie ein Induktionskochfeld - alles, was Sie zum bequemen Kochen und gemeinsamen Essen benötigen:',
      items: ['Topf- und Pfannenset','Sets mit Tellern (je 6 Stk.) und Schalen','Tassen, Gläser, Weingläser u.a.','Besteck- und Kochmesserset','Küchen- und Grillzubehör','Toaster, Wasserkocher, Teezubereiter','Nespresso DeLonghi Kaffeemaschine','Kaffeekapseln (20 Stk.)','Tee, Zucker, Salz, Pfeffer'],
      images: [
        { src: '/foto/w13.webp', alt: 'Wohnzimmer mit Küchenzeile', tip: 'Geräumiges Wohnzimmer mit Küchenzeile.' },
        { src: '/foto/w7.webp', alt: 'Küchenzeile', tip: 'Küchenzeile mit Kühlschrank, Spülmaschine und Induktionskochfeld.' },
        { src: '/foto/w15.webp', alt: 'Sitzecke im Wohnzimmer', tip: 'Bibliothek und Brettspiele.' },
        { src: '/foto/w3.webp', alt: 'Smart TV im Wohnzimmer', tip: 'Smart TV mit Netflix.' },
      ],
    },
    bathroom: {
      title: 'Badezimmer',
      intro: 'Modernes Bad mit Walk-in-Dusche & Regenduschkopf. Ausstattung:',
      items: ['Handtuchset','Duschgel und Shampoo','Flüssigseife','Reinigungsmittel','Toilettenpapier','Haartrockner','Akkustaubsauger','Wäscheständer','weiteres Zubehör'],
      images: [
        { src: '/foto/w17.webp', alt: 'Badezimmer mit Dusche', tip: 'Geräumiges Bad mit Walk-in-Dusche.' },
        { src: '/foto/w18.webp', alt: 'Badezimmerausstattung', tip: 'Handtücher, Hygieneartikel und Zubehör.' },
      ],
    },
    parking: { title: 'Kostenloser Parkplatz', text: 'Bei jedem Haus stehen zwei Parkplätze zur Verfügung. Das Gelände ist eingezäunt und beleuchtet, mit separatem Tor und Pforte.' },
    guide: { title: 'Gästeführer LAS BIALA\'S', qrAlt: 'QR-Code mit Link zum Gästeführer von Las Balas' },
  },
};

// ===== SAUNA & JACUZZI =====
export const saunaJacuzzi: Record<Lang, any> = {
  pl: {
    sauna: {
      title: 'Sauna',
      text: 'Gościom oferujemy możliwość bezpłatnego korzystania z sauny fińskiej z przebieralnią, głośnikami bluetooth i klimatycznym oświetleniem LED. Dla pełnego komfortu zapewniamy szlafroki, ręczniki do sauny oraz miejsce do odpoczynku na zewnętrznym tarasie, wraz z beczką do schładzania i leżakami wśród sosen.',
      btn: 'Zasady korzystania',
      btnHref: 'https://lasbialas.pl/info/#/na-miejscu/32',
    },
    jacuzzi: {
      title: 'Jacuzzi',
      text: 'Przy każdym z domków dostępne jest prywatne jacuzzi, z funkcją automatycznego podgrzewania wody, systemem masażu powietrznego, nastrojowym oświetleniem LED, pergolą z regulowanym zadaszeniem oraz zasłonami. Czteroosobowe jacuzzi dostępne jest na wyłączność, bez ograniczenia czasu korzystania.',
      btn: 'Zasady korzystania',
      btnHref: 'https://lasbialas.pl/info/#/na-miejscu/385',
    },
  },
  en: {
    sauna: {
      title: 'Sauna',
      text: 'Guests are welcome to free use of a Finnish sauna with ambient LED lighting and Bluetooth speakers. For comfort, we provide bathrobes and sauna towels, and on the outdoor terrace there is a cold-water tub and a relaxation area.',
      btn: 'Rules of use',
      btnHref: 'https://lasbialas.pl/info/en/#/on-site/1049',
    },
    jacuzzi: {
      title: 'Jacuzzi',
      text: 'Each cottage has its own private jacuzzi with automatic water heating, air massage system, ambient LED lighting, a pergola with adjustable roofing and curtains. The four-person jacuzzi is available exclusively for guests, with no time limits.',
      btn: 'Rules of use',
      btnHref: 'https://lasbialas.pl/info/en/#/on-site/1026',
    },
  },
  de: {
    sauna: {
      title: 'Sauna',
      text: 'Kostenlose Nutzung einer finnischen Sauna mit stimmungsvoller LED-Beleuchtung und Bluetooth-Lautsprechern. Für Komfort stellen wir Bademäntel und Saunatücher bereit, und auf der Außenterrasse stehen ein Abkühlbottich sowie ein Ruhebereich zur Verfügung.',
      btn: 'Nutzungsregeln',
      btnHref: 'https://lasbialas.pl/info/de/#/vor-ort/732',
    },
    jacuzzi: {
      title: 'Jacuzzi',
      text: 'Bei jedem Haus steht Ihnen ein privates Jacuzzi zur Verfügung - mit automatischer Wassererwärmung, Luftmassage-System, stimmungsvoller LED-Beleuchtung, Pergola mit verstellbarem Dach und Vorhängen. Das Vier-Personen-Jacuzzi steht exklusiv und ohne Zeitlimit zur Nutzung bereit.',
      btn: 'Nutzungsregeln',
      btnHref: 'https://lasbialas.pl/info/de/#/vor-ort/709',
    },
  },
};

// ===== PRICING =====
export const pricing: Record<Lang, any> = {
  pl: {
    title: 'Cennik 2026',
    cols: ['Cena za dobę 1-2 os.', 'Długość pobytu', '3-4 os.'],
    rows: [
      ['<strong>475 zł *</strong>', 'od 4 dób', '+120 zł / os.'],
      ['495 zł *', '3 doby', '+120 zł / os.'],
      ['525 zł', '2 doby', '+120 zł / os.'],
    ],
    notes: [
      'Minimalny okres pobytu: <b>2 doby</b> (opcja tylko przez stronę WWW).',
      '* rabat naliczany automatycznie w systemie rezerwacji.',
    ],
    amenitiesTitle: 'Udogodnienia',
    amenitiesCols: ['Udogodnienia', 'Korzystanie'],
    amenitiesRows: [
      ['Sauna', 'bezpłatnie'],
      ['Rowery', 'bezpłatnie'],
      ['Deski SUP (w okresie letnim)', 'bezpłatnie'],
      ['Grill, węgiel, podpałka', 'bezpłatnie'],
      ['Jacuzzi (opcja)', 'wg <a href="#cennik-jacuzzi" style="color: #40a95c; text-decoration: underline;">cennika</a>'],
    ],
    reserve: 'Rezerwuj',
    freeTitle: 'Bezpłatnie do dyspozycji Gości',
    freeItems: ['sauna','balia z wodą do schładzania','szlafroki i ręczniki do saunowania','4 rowery trekkingowe','grill','węgiel, podpałka do grilla','4 deski SUP (od V do X)'],
    dayInfo: 'Doba pobytu trwa od <b>16:00</b> do <b>12:00</b> (poza sezonem letnim możliwość ustalenia innych godzin).',
    footerText: 'Nie pobieramy opłat licznikowych. Wystawiamy fakturę VAT. Więcej szczegółów dotyczących wyposażenia, udogodnień i pobytu na miejscu znajdziesz w naszym <a href="https://lasbialas.pl/info/" style="color:#328247; text-decoration:none;" target="_blank">przewodniku</a>.',
    guideBtn: 'Przewodnik',
  },
  en: {
    title: 'Price List 2026',
    cols: ['Length of stay', 'Price per night 1–2 guests', '3–4 guests'],
    rows: [
      ['2 nights', '550 zł', '+120 zł / guest'],
      ['3 nights', '520 zł*', '+120 zł / guest'],
      ['4+ nights', '495 zł*', '+120 zł / guest'],
    ],
    notes: [
      'Minimum stay: <b>2 nights</b> (only on our website).',
      '*Discount is applied automatically in the booking system.',
    ],
    amenitiesTitle: 'Amenities',
    amenitiesCols: ['Amenity', 'Usage'],
    amenitiesRows: [
      ['Sauna', 'free'],
      ['Bikes', 'free'],
      ['SUP boards (summer season)', 'free'],
      ['Grill, charcoal, fire starter', 'free'],
      ['Jacuzzi (optional)', 'see <a href="#cennik-jacuzzi" style="color: #40a95c; text-decoration: underline;">pricing</a>'],
    ],
    reserve: 'Book Now',
    freeTitle: 'Free for Guests',
    freeItems: ['sauna','cooling water tub','bathrobes and sauna towels','4 trekking bikes','portable grill','charcoal, fire starter, and grill accessories','4 SUP boards (from May to October)'],
    dayInfo: 'The stay lasts from <b>4:00 PM</b> to <b>12:00 PM</b> (other times can be arranged).',
    footerText: 'No utility fees. VAT invoice available. More details about the equipment, amenities, and your stay can be found in our <a href="/przewodnik/" style="color:#328247; text-decoration:none;" target="_blank">guide</a>.',
    guideBtn: 'Guide',
  },
  de: {
    title: 'Preisliste 2026',
    cols: ['Aufenthaltsdauer', 'Preis pro Nacht 1–2 Pers.', '3–4 Pers.'],
    rows: [
      ['2 Nächte', '550 zł', '+120 zł / Pers.'],
      ['3 Nächte', '520 zł*', '+120 zł / Pers.'],
      ['ab 4 Nächten', '495 zł*', '+120 zł / Pers.'],
    ],
    notes: [
      'Mindestaufenthalt: <b>2 Nächte</b> (nur über die Website buchbar).',
      '*Der Rabatt wird automatisch im Buchungssystem angewendet.',
    ],
    amenitiesTitle: 'Annehmlichkeiten',
    amenitiesCols: ['Annehmlichkeit', 'Nutzung'],
    amenitiesRows: [
      ['Sauna', 'kostenlos'],
      ['Fahrräder', 'kostenlos'],
      ['SUP-Boards (Sommersaison)', 'kostenlos'],
      ['Grill, Holzkohle, Anzünder', 'kostenlos'],
      ['Jacuzzi (optional)', 'siehe <a href="#cennik-jacuzzi" style="color: #40a95c; text-decoration: underline;">Preisliste</a>'],
    ],
    reserve: 'Reservierung',
    freeTitle: 'Kostenlos für unsere Gäste',
    freeItems: ['Sauna','Abkühlbottich mit Wasser','Bademäntel und Saunatücher','4 Trekking-Fahrräder','tragbarer Grill','Kohle, Anzünder und Grillzubehör','4 SUP-Boards (von Mai bis Oktober)'],
    dayInfo: 'Der Aufenthalt dauert von <b>16:00</b> bis <b>12:00</b> (andere Zeiten nach Absprache möglich).',
    footerText: 'Es fallen keine Zählergebühren an. Wir stellen eine Rechnung mit MwSt. aus. Weitere Details zur Ausstattung, zu den Annehmlichkeiten und zum Aufenthalt findest du in unserem <a href="https://info.lasbialas.pl/de/" style="color:#328247; text-decoration:none;" target="_blank">Leitfaden</a>.',
    guideBtn: 'Reiseführer',
  },
};

// ===== DIRECT BENEFITS =====
export const benefits: Record<Lang, string[]> = {
  pl: [
    'najkorzystniejsze ceny',
    'pobyty już od 2 nocy',
    'rabaty na pobyty 3+ dobowe',
    'opcja innej pory (za/wy)meldowania',
    'możliwość zmiany terminu',
  ],
  en: [
    'best prices',
    'stays from 2 nights',
    'flexible check-in/out times',
    '5% off your next stay',
    'option to change dates',
    'discount for 3+ night stays',
  ],
  de: [
    'die besten Preise',
    'Aufenthalte ab 2 Nächten',
    'flexible Check-in/out-Zeiten',
    '5 % auf den nächsten Aufenthalt',
    'Möglichkeit zur Terminänderung',
    'Rabatt für Aufenthalte ab 3 Nächten',
  ],
};

// ===== JACUZZI RENTAL =====
export const jacuzziRental: Record<Lang, any> = {
  pl: {
    title: 'Wynajem jacuzzi (opcja)',
    intro: 'Wynajem obejmuje <b>nieograniczony dostęp do prywatnego jacuzzi</b>, które znajduje się na tarasie obok domku, w otoczeniu wysokich drzew sosnowego lasu. Ma całodobowo podgrzewaną wodę (stałą temperaturę 37–38 °C lub inna na życzenie), funkcje aeromasażu, oświetlenie LED, pergolę z regulowanym zadaszeniem i zasłony. W jacuzzi nie stosujemy chloru, woda wymieniana przed każdym pobytem, a w jego trakcie wykonywane są regularne serwisy.',
    colsHeader: ['Długość pobytu', 'Cena jacuzzi za pobyt'],
    colsSub: ['1–2 os.', '3–4 os.'],
    rows: [
      ['2-3 doby', '330 zł', '390 zł'],
      ['4 doby', '430 zł', '510 zł'],
      ['5 dób', '520 zł', '620 zł'],
      ['kolejna doba', '+100 zł', '+120 zł'],
    ],
    feesHeader: ['Opłaty jednorazowe', 'Cena'],
    feesRows: [['Przygotowanie jacuzzi na pobyt', '150 zł']],
    note: 'Cena wynajmu obejmuje opłatę za przygotowanie (150 zł) oraz opłatę za korzystanie zależną od długości pobytu.',
    petTitle: 'Zasady dotyczące zwierząt',
    petText: 'Z uwagi na charakter obiektu oraz względy organizacyjne, <b>nie przyjmujemy pobytów ze zwierzętami.</b> Uprzejmie prosimy o uwzględnienie tej zasady przy planowaniu rezerwacji.',
  },
  en: {
    title: 'Jacuzzi rental (optional)',
    intro: 'The rental includes <b>unlimited access to a private jacuzzi</b>, which you can enjoy at any time. The jacuzzi is located right next to the cabin, surrounded by tall pine trees. It features 24-hour heated water (37-38°C or adjusted to your preference), air massage functions, LED lighting, a pergola with adjustable roof, and curtains. No chlorine is used - the water is replaced before each stay and maintained regularly during it.',
    colsHeader: ['Length of Stay', 'Jacuzzi Price per Stay'],
    colsSub: ['1–2 persons', '3–4 persons'],
    rows: [
      ['2–3 nights', '330 zł', '390 zł'],
      ['4 nights', '430 zł', '510 zł'],
      ['5 nights', '520 zł', '620 zł'],
      ['each additional night', '+100 zł', '+120 zł'],
    ],
    feesHeader: ['One-time Fees', 'Price'],
    feesRows: [['Jacuzzi preparation for stay', '150 zł']],
    note: 'The rental price includes a preparation fee (150 PLN) and a daily usage fee, calculated in the booking system depending on the length of stay.',
    petTitle: 'Pet policy',
    petText: 'Due to the character of the property and organizational reasons, <b>stays with pets are not accepted.</b> Please take this into account when booking.',
  },
  de: {
    title: 'Jacuzzi-Miete (optional)',
    intro: 'Die Miete umfasst <b>uneingeschränkten Zugang zum privaten Jacuzzi</b>, den Sie jederzeit nutzen können. Das Jacuzzi befindet sich direkt neben dem Ferienhaus, umgeben von hohen Kiefern. Er verfügt über dauerhaft beheiztes Wasser (37-38 °C oder auf Wunsch), Luftmassagen, LED-Beleuchtung, eine Pergola mit verstellbarem Dach sowie Vorhänge. Wir verwenden kein Chlor - das Wasser wird vor jedem Aufenthalt gewechselt und regelmäßig gewartet.',
    colsHeader: ['Aufenthaltsdauer', 'Preis für das Jacuzzi pro Aufenthalt'],
    colsSub: ['1–2 Personen', '3–4 Personen'],
    rows: [
      ['2–3 Nächte', '330 zł', '390 zł'],
      ['4 Nächte', '430 zł', '510 zł'],
      ['5 Nächte', '520 zł', '620 zł'],
      ['jede weitere Nacht', '+100 zł', '+120 zł'],
    ],
    feesHeader: ['Einmalige Gebühren', 'Preis'],
    feesRows: [['Vorbereitung des Jacuzzi für den Aufenthalt', '150 zł']],
    note: 'Der Mietpreis beinhaltet die Vorbereitungsgebühr (150 PLN) sowie die tägliche Nutzungsgebühr und wird im Buchungssystem je nach Aufenthaltsdauer berechnet.',
    petTitle: 'Haustierregelung',
    petText: 'Aufgrund der Beschaffenheit des Objekts und organisatorischer Gründe <b>sind Aufenthalte mit Haustieren nicht gestattet.</b> Bitte berücksichtigen Sie dies bei Ihrer Buchung.',
  },
};

// ===== BANNER =====
export const banner: Record<Lang, string> = {
  pl: 'CAŁOROCZNE DOMKI LETNISKOWE<br>W PUSZCZY NOTECKIEJ',
  en: 'YEAR-ROUND HOLIDAY COTTAGES<br>IN THE NOTEĆ FOREST',
  de: 'GANZJÄHRIGE FERIENHÄUSER<br>IN DER PUSZCZA NOTECKA',
};

// ===== DIRECTIONS =====
export const directions: Record<Lang, any> = {
  pl: {
    carTitle: 'Dojazd samochodem',
    carBtn: 'Wyznacz trasę',
    carText: 'Wyznaczając trasę dojazdu przez powyższy link, nawigacja Google Maps doprowadzi Cię do miejsca <b>oddalonego o około 200 metrów od domków</b>. Następnie skorzystaj z mapki z drogą <a href="/dojazd" style="display: inline-flex; align-items: center; font-size: 18px; color: #328247; text-decoration: none;" target="_blank"><span>dojazdu na miejscu</span></a>.',
    trainTitle: 'Dojazd pociągiem',
    trainBtn: 'Do stacji kolejowej MIAŁY',
    trainText: 'Gościom zapewniamy zarówno transfer ze <b>stacji kolejowej Miały</b> (10 km od Białej) do domków Las Bialas, jak i transfer powrotny w dniu wyjazdu. Jeśli planujesz przyjazd pociągiem, skontaktuj się z nami aby ustalić szczegóły.',
    locationTitle: 'Lokalizacja domków',
    locationText: '64-730 Biała, Puszcza Notecka, Wielkopolska',
    mapBtn: 'Mapka dojazdu na miejscu',
    mapHref: '/dojazd',
  },
  en: {
    carTitle: 'Arrival by car',
    carBtn: 'Plan route',
    carText: 'When planning the route using the link above, Google Maps will guide you to a spot located <b>about 200 meters from the cottages</b>. Then follow the map with the <a href="/en/local-directions.html" style="display: inline-flex; align-items: center; font-size: 18px; color: #328247; text-decoration: none;" target="_blank"><span>local access road</span></a>.',
    trainTitle: 'Arrival by train',
    trainBtn: 'To MIAŁY station',
    trainText: 'We provide guests with a transfer from the <b>Miały railway station</b> (10 km from Biała) to the Las Biala\'s cottages, as well as a return transfer on the departure day. If you plan to arrive by train, please contact us to arrange details.',
    locationTitle: 'Location of Las Biala\'s cottages',
    locationText: '64-730 Biała, Noteć Forest, Greater Poland',
    mapBtn: 'Local access map',
    mapHref: '/en/local-directions.html',
  },
  de: {
    carTitle: 'Anreise mit dem Auto',
    carBtn: 'Route planen',
    carText: 'Wenn Sie die Route über den obigen Link planen, führt Sie Google Maps zu einem Punkt, der sich <b>etwa 200 Meter von den Häusern entfernt</b> befindet. Verwenden Sie anschließend die Karte mit der <a href="/de/anfahrt-vor-ort.html" style="display: inline-flex; align-items: center; font-size: 18px; color: #328247; text-decoration: none;" target="_blank"><span>Anfahrt vor Ort</span></a>.',
    trainTitle: 'Anreise mit dem Zug',
    trainBtn: 'Zum Bahnhof MIAŁY',
    trainText: 'Wir bieten unseren Gästen einen Transfer vom <b>Bahnhof MIAŁY</b> (10 km von Biała entfernt) zu den Häusern Las Biala\'s sowie den Rücktransfer am Abreisetag an. Wenn Sie mit dem Zug anreisen, kontaktieren Sie uns bitte zur Absprache der Details.',
    locationTitle: 'Standort Las Biala\'s',
    locationText: '64-730 Biała, Puszcza Notecka, Großpolen',
    mapBtn: 'Karte - Anfahrt vor Ort',
    mapHref: '/de/anfahrt-vor-ort.html',
  },
};

// ===== SURROUNDINGS =====
export const surroundings: Record<Lang, any> = {
  pl: {
    title: 'Biała i okolice',
    text: 'Biała to niewielka wieś położona w gminie Wieleń, w zachodniej części Puszczy Noteckiej, tuż nad Jeziorem Białym. Otoczona lasami i oddalona od głównych szlaków komunikacyjnych, stanowi dobre miejsce dla osób szukających spokojnego wypoczynku w naturalnym otoczeniu.<br><br>Najbliższa okolica sprzyja aktywnemu wypoczynkowi. Liczne leśne dróżki i szlaki idealnie nadają się na wycieczki rowerowe, bieganie oraz spacery. W sezonie grzybowym tutejsze lasy przyciągają miłośników grzybobrania. Miejscowe jezioro oraz pobliskie akweny oferują możliwość kąpieli, plażowania, wędkowania, a także uprawiania sportów wodnych – kajakarstwa (w tym spływów kajakowych), SUP-a czy windsurfingu.',
    guideBtn: 'Przewodnik',
  },
  en: {
    title: 'Biała and Surroundings',
    text: 'Biała is a small village located in the Wieleń commune, in the western part of the Noteć Forest, right by Lake Białe. Surrounded by forests and away from main roads, it is an ideal place for those seeking a peaceful stay in a natural environment.<br><br>The surrounding area is perfect for active recreation. Numerous forest paths and trails are ideal for cycling, running, and walking. During mushroom season, the local forests attract mushroom-picking enthusiasts. The nearby lake and other local water bodies offer opportunities for swimming, sunbathing, fishing, and water sports such as kayaking (including river trips), stand-up paddleboarding (SUP), and windsurfing.',
    guideBtn: 'Guide',
  },
  de: {
    title: 'Biała und Umgebung',
    text: 'Biała ist ein kleines Dorf in der Gemeinde Wieleń, im westlichen Teil der Puszcza Notecka, direkt am See Białe. Umgeben von Wäldern, abseits der Hauptverkehrswege, ist es ein idealer Ort für alle, die Ruhe in natürlicher Umgebung suchen.<br><br>Die Umgebung ist ideal für aktive Erholung. Zahlreiche Waldwege und Pfade eignen sich perfekt zum Radfahren, Laufen und Spazierengehen. In der Pilzsaison ziehen die umliegenden Wälder viele Pilzliebhaber an. Der nahegelegene See und andere Gewässer bieten Möglichkeiten zum Baden, Sonnenbaden, Angeln sowie für Wassersportarten wie Kajakfahren (einschließlich Kanutouren), Stand-Up-Paddling (SUP) und Windsurfen.',
    guideBtn: 'Reiseführer',
  },
};