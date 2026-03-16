import { useState } from "react";

const IMG = {
  gold: {
    king: "images/gold/goldking.PNG",
    queen: "images/gold/godqueen.PNG",
    bishopCards: "images/gold/goldbirdbishop.PNG",
    bishopBlues: "images/gold/goldbluesbishop.PNG",
    knight: "images/gold/goldknight.PNG",
    rook6900: "images/gold/gold6900rook.PNG",
    rook6901: "images/gold/gold6901rook.PNG",
    pawn: "images/gold/goldpawn.PNG",
  },
  red: {
    king: "images/red/redking.PNG",
    queen: "images/red/redqueen.PNG",
    bishopCards: "images/red/redbirdbishop.PNG",
    bishopBlues: "images/red/redbluesbishop.PNG",
    knight: "images/red/redknight.png",
    rook6900: "images/red/red6900rook.png",
    rook6901: "images/red/red6901rook.PNG",
    pawn: "images/red/redpawn.PNG",
  },
  sets: {
    goldSide: "images/sets/goldside.PNG",
    redSide: "images/sets/redside.PNG",
    goldPawns: "images/sets/goldpawns.png",
    redPawns: "images/sets/redpawnset.png",
  }
};

const pieces = [
  {
    role: "King",
    name: "St. Louis Chess Club",
    goldImgs: [IMG.gold.king],
    redImgs: [IMG.red.king],
    form: "The tallest piece on the board \u2014 bearing the club\u2019s logo on its body. The form honors the classic Staunton king profile: cross finial, crown band, tapered body. The logo is the only marking. It doesn\u2019t need anything else.",
    rationale: "The most important piece on the board. Everything else exists to protect it. The St. Louis Chess Club made this city the Chess Capital of the United States \u2014 designated by Congress in 2014. The World Chess Hall of Fame sits directly across the street. The club hosts the U.S. Championship, the Sinquefield Cup, and the Cairns Cup. It puts chess into public schools. It draws the world\u2019s strongest players to a building on Euclid Avenue. A game honored for fifteen hundred years found a new capital. Every player plays the same 64 squares.",
    height: "4.5\u2033"
  },
  {
    role: "Queen",
    name: "The Rivers",
    goldImgs: [IMG.gold.queen],
    redImgs: [IMG.red.queen],
    form: "The confluence Y from the St. Louis city flag \u2014 two fluid forms rising from a single base, splitting outward with the organic authority of moving water. The most powerful piece takes the most elemental form. No architecture, no figure \u2014 just force.",
    rationale: "The Mississippi and Missouri converge at St. Louis. That\u2019s why the city exists. The rivers go everywhere, reach everything, shaped everything. They carried the fur trade, the steamboats, the 1993 flood, the commerce that built the Gateway. The queen moves in every direction with unlimited range. The rivers do the same. The city flag carries their confluence as a wavy Y \u2014 the oldest and most fundamental symbol of why St. Louis is where it is. One is the game\u2019s most powerful piece. The other is the region\u2019s most powerful force. Neither asks permission.",
    height: "4.25\u2033"
  },
  {
    role: "Bishop",
    name: "Cardinals & Blues",
    goldImgs: [IMG.gold.bishopCards, IMG.gold.bishopBlues],
    redImgs: [IMG.red.bishopCards, IMG.red.bishopBlues],
    form: "Two bishops, two sports. Bishop 1: The traditional bishop profile with the Cardinals bird-on-bat on its body \u2014 clean, iconic, unmistakable. Bishop 2: The same profile bearing the Blue Note \u2014 the quarter note curving into the diagonal authority of the piece. One warm, one cool. One summer, one winter.",
    rationale: "Bishops work in pairs but never share a square \u2014 one lives on light, one on dark. The Cardinals and Blues do the same thing: two sports, two seasons, two emotional registers that never overlap. The Cardinals have 11 World Series titles and Busch Stadium roaring in October. The Blues won the Stanley Cup in 2019 and the whole city lost its mind in June. Together they cover the entire emotional calendar of St. Louis. Light square, dark square. Summer, winter. One side of the heart, then the other. They never cross paths, but together they cover everything.",
    height: "3.5\u2033"
  },
  {
    role: "Knight",
    name: "Budweiser Clydesdales",
    goldImgs: [IMG.gold.knight],
    redImgs: [IMG.red.knight],
    form: "A Clydesdale \u2014 the full animal, not just the head. Feathered hooves, braided mane, the powerful arched neck, the muscular chest. Standing foursquare on the base, built to carry weight. Not a generic horse. A specific, recognizable, St. Louis horse.",
    rationale: "Knights are horses. The Clydesdales are THE St. Louis horse \u2014 pulling the Budweiser wagon since 1933, introduced to celebrate the end of Prohibition. They walk through downtown during the holidays. They appear at the brewery campus year-round. The knight is the only piece on the board that can leap over others \u2014 the move nobody sees coming, the piece that changes geometry. The Clydesdales are the same: impossibly large animals moving with impossible grace. These are the pieces visitors reach for first. This Bud\u2019s for you.",
    height: "3.75\u2033"
  },
  {
    role: "Rook",
    name: "6900 Delmar & 6901 Washington",
    goldImgs: [IMG.gold.rook6900, IMG.gold.rook6901],
    redImgs: [IMG.red.rook6900, IMG.red.rook6901],
    form: "Two buildings, two rooks. Rook 1: 6900 Delmar \u2014 the Christian Science building at chess scale. Horizontal massing, Classical Revival facade, the coffered dome visible on top, the colonnade suggested with minimal columns. The dome is the crown, sitting low and wide. Rook 2: 6901 Washington \u2014 the Methodist church at chess scale. Gothic Revival verticality, the bell tower rising from the body, Gothic pinnacles at the corners, pointed arch windows along the flanks. The tower pulls the eye upward.",
    rationale: "The rook is the castle. These are the castles. 6900 Delmar was built in 1924 by T.P. Barnett \u2014 a dome building listed on the National Register of Historic Places since 1980. Corinthian columns, coffered interior, steel-and-concrete structure hidden inside a classical shell. 6901 Washington was built in 1920 \u2014 Gothic Revival reaching skyward, a congregation of over 1,000 at its peak. Same block, same era, opposite architectures. One spreads wide. One reaches up. Now they\u2019re miniworld\u2019s home \u2014 an immersive destination where miniature worlds come to life inside two landmark churches. Two buildings on a chessboard. Two buildings on a city block. The dialogue between them is the same in both worlds \u2014 a conversation across the board, move by move, century by century.",
    height: "3.5\u2033 / 4\u2033"
  },
  {
    role: "Pawn",
    name: "Fleur-de-lis",
    goldImgs: [IMG.gold.pawn],
    redImgs: [IMG.red.pawn],
    form: "The three-petaled fleur-de-lis rising from a pawn base. Clean, heraldic, repeatable at small scale. All eight identical \u2014 the city\u2019s pattern, uniform and democratic. The form is simple enough to read at 2.5 inches, complex enough to reward a closer look.",
    rationale: "On every lamppost. Every civic building. The city flag. The fleur-de-lis is the oldest and most repeated symbol in St. Louis \u2014 French origin, royal lineage, democratic deployment. It predates the Arch, the Cardinals, the brewery. It was here before the city was American. Eight across the front rank \u2014 the first line of defense, the smallest unit of the city\u2019s identity. Individually expendable, collectively devastating. Promotion awaits any pawn that crosses the board.",
    height: "2.5\u2033"
  }
];

const boardConcept = {
  title: "The Board",
  sections: [
    {
      label: "Chess Is a Miniature World",
      text: "Every chess game compresses a civilization onto 64 squares. Two sides, 32 inhabitants, and the entire arc of an encounter \u2014 from first contact through escalation, sacrifice, and resolution \u2014 unfolds in the space of an hour. Opening theory refined across centuries. Middlegame battles that mirror real conflict. Endgames that distill survival to its essentials. The board is a world. The pieces are its population. The game is their history. For fifteen hundred years, people have gathered around this miniature world to think, compete, and connect. Chess doesn\u2019t belong to any nation. It belongs to the species."
    },
    {
      label: "The Arch Inlay",
      text: "The Gateway Arch is too important to be one piece on one square. It doesn\u2019t belong to either side. It belongs to the game. Two tiny arch silhouettes \u2014 open catenary curves inlaid in metal, flush with the walnut border. One in gold on the gold side. One in copper-red on the red side. Each player sits behind their own arch. The playing surface stays pure \u2014 64 squares, unmarked, honoring the tournament tradition. The Arch lives in the border where it belongs: not on the board but around it. St. Louis is the arena."
    },
    {
      label: "The World Stage",
      text: "The 2026 Candidates Tournament is underway in Cyprus. The winner will challenge Gukesh Dommaraju \u2014 the youngest World Chess Champion in history, crowned in December 2024 at age 18 \u2014 for the title later this year. The match location is undecided. St. Louis has hosted more elite chess events than any American city in the last decade. The Sinquefield Cup is the only U.S. stop on the Grand Chess Tour. When the world\u2019s best players sit down to decide who is the strongest, this city has earned a seat at the table. The Arch on the border is a claim: the world\u2019s game, played on St. Louis ground."
    },
    {
      label: "Two Sides, One City",
      text: "St. Louis playing for its future. The landmarks, the icons, the cultural institutions engaged in a game to discover what matters most \u2014 rendered in red and gold, the heraldic colors of the city flag. Red for the field: courage, the Spanish and French and American blood that built this place. Gold for the bezant: the city itself, the Louisiana Purchase, the convergence point. The distinction is finish, not allegiance. Both sides are St. Louis."
    },
    {
      label: "Material \u2014 The Board",
      text: "Walnut and maple \u2014 the traditional pairing for tournament play. Dark walnut squares, light maple squares, walnut border. A thin black inlay line frames the playing surface on all four sides \u2014 separating the 64 squares from the border as a contained field. Two Gateway Arch silhouettes inlaid in metal, one on each player\u2019s border edge: gold on the gold side, copper-red on the red side. Open catenary curves, flush with the walnut, barely visible from playing distance, precise on close inspection. The playing surface is unmarked. 21\" x 21\" to accommodate 4.5\" kings."
    },
    {
      label: "Material \u2014 The Pieces",
      text: "Both sides in high-resolution resin with weighted bases and felt pads. One side in a warm red metallic finish \u2014 the field of the city flag, the brick, the cardinal. The other in gold \u2014 the bezant, the fleur-de-lis ground, the Louisiana Purchase. The city\u2019s heraldic identity in your hands. Tournament-weighted for serious play. The material difference is felt in the hand before it\u2019s seen by the eye."
    },
    {
      label: "Fabrication",
      text: "Architectural silhouettes modeled from reference photographs and archival drawings. AI-assisted 3D modeling, resin printed, hand finished. The set demonstrates the miniature worlds production pipeline at tabletop scale \u2014 the same convergence of technology and craft that will produce exhibition content for the venue. Every piece is a proof of concept for the building it will one day sit inside."
    },
    {
      label: "Production",
      text: "Each set numbered and signed. Limited to an edition of ten. These sets are produced at the threshold where technology and craft meet \u2014 where hand made objects and digital fabrication converge to create objects that resonate across the table and across the globe. The making of the chess set is the making of the miniature world: extract the city, render it at a new scale, put it in your hands."
    }
  ]
};

const narrativeLayer = {
  title: "The Game and the City",
  points: [
    {
      heading: "Chess has always been a miniature world",
      text: "Two civilizations on 64 squares. Kings, sacrifice, strategy \u2014 the entire drama of human encounter compressed to the size of a tabletop. For fifteen hundred years, this miniature world has been the common language of thinkers, competitors, and cultures that share nothing else. It crosses every border. It needs no translation. The game is the world, reduced to its essentials."
    },
    {
      heading: "St. Louis made itself the capital of that world",
      text: "Not by accident. By will, by investment, by sustained commitment to the idea that this city could be where the best players on earth come to compete. The Chess Club. The World Chess Hall of Fame. The Sinquefield Cup. The U.S. Championship. Congress recognized it. The players confirmed it. The infrastructure exists. The culture exists. St. Louis is the capital."
    },
    {
      heading: "6900 Delmar and 6901 Washington",
      text: "At the gates of University City, a cultural campus is forming at the intersections of Delmar, Trinity, and Washington \u2014 COCA, Washington University\u2019s Music Center, and now two magnificent churches built four years apart on a single block. A 1924 Neoclassical dome listed on the National Register of Historic Places. A 1920 Gothic Revival bell tower. Both being transformed into an immersive destination where the arts flourish. Visible workshops. A programmable dome. Gathering spaces, caf\u00E9, performance areas, and free public courtyards. An oasis for people to be together with purpose \u2014 to make things with their hands at a moment when machines are taking over cognitive labor. Not a museum you visit once. A place you return to because something new is always being built. Congregations gathered here for nearly a century. The gathering continues. The purpose expands."
    },
    {
      heading: "Conversation Objectified",
      text: "Any conversation can become three dimensional \u2014 quickly, or taking as much time as one has. These buildings will become home to endless conversations, stories, histories, and dreams. A canvas is being stretched to iterate and discover. A world stage to share ideas as a local and global community. This chess set is one of the first of these conversations \u2014 from a lunch at Scarlett\u2019s to an object presented at yet another conversation about how this vision gets built. Something you hold that carries an idea and has the power to move our world."
    },
    {
      heading: "What a Chess Set Proves",
      text: "This set exists before the buildings open. It was conceived, designed, and produced in weeks \u2014 from conversation to object. That speed is the point. The same process that made this set will make ornaments, prints, miniatures, children\u2019s editions, seasonal pieces, and objects that haven\u2019t been imagined yet. Every exhibition inside the buildings generates a product line. Every conversation generates a collectible. The venue doesn\u2019t just sell tickets. It makes things \u2014 and the things travel further than any visitor."
    },
    {
      heading: "Edition of ten",
      text: "Each set numbered and signed. Produced in the same year the next World Champion will be decided. A physical artifact that appreciates alongside the project. By the time the venue opens, these sets are irreplaceable."
    }
  ]
};

const venueProgram = {
  title: "The Venue",
  sections: [
    {
      label: "Two Buildings, One Campus",
      text: "6900 Delmar: 13,412 SF. Neoclassical dome, auditorium, mezzanine, lower level with classrooms and support spaces, foyer, reading rooms, spiral staircases, and a coffered dome that becomes a programmable projection canvas. 6901 Washington: 21,884 SF. Gothic Revival sanctuary with 250-seat capacity plus 60-seat balcony, 10 classrooms, fellowship hall, kitchen, offices, and a bell tower visible from blocks away. Combined: over 35,000 SF of programmable space across two connected buildings that were operating as fully functional churches and schools less than five years ago. The infrastructure exists. The bones are extraordinary."
    },
    {
      label: "Immersive Miniature Worlds",
      text: "The anchor attraction. Physical miniature landscapes, scenes, and worlds that visitors walk through and around \u2014 in the tradition of Miniatur Wunderland in Hamburg, which opened in eight months and became Germany\u2019s most-visited tourist attraction. Visible workshops where the worlds are built in real time. A programmable dome that transforms the 1924 coffered ceiling into a living sky. Seasonal programming that gives visitors a reason to return. The attraction is never the same twice because the worlds inside it are always being built."
    },
    {
      label: "Performing Arts",
      text: "Theater. Live music. Film screenings. Lectures. The sanctuary at 6901 seats 310 with existing infrastructure for sound and lighting. The auditorium at 6900 offers a second performance space beneath the dome. Two venues, two scales, two acoustics \u2014 programming seven days a week across both buildings."
    },
    {
      label: "Private Events",
      text: "Weddings under the dome. Graduations in the sanctuary. Corporate banquets in the fellowship hall. Private receptions in the courtyard between the buildings. The spaces were designed for ceremony. They still are."
    },
    {
      label: "Education and Competition",
      text: "Ten classrooms across the campus. Chess instruction, art workshops, maker spaces, lectures, summer camps, after-school programs. Tournament hosting for scholastic and amateur chess \u2014 positioned two miles from the Chess Capital\u2019s flagship institution. The campus extends the Chess Club\u2019s reach into a neighborhood that\u2019s ready for it."
    },
    {
      label: "Food and Retail",
      text: "Caf\u00E9 and gathering space in the courtyard and lower level. A gift shop stocked with objects produced on-site \u2014 miniatures, prints, ornaments, chess sets, seasonal editions, children\u2019s versions. Every exhibition inside the buildings generates a product line. The venue makes things, and the things travel further than any visitor."
    },
    {
      label: "Tourism",
      text: "Ticketed admission to the miniature worlds exhibition. Membership programs with seasonal access and return incentives. Group tours. School field trips. The Delmar Loop already draws regional traffic. The cultural campus adds a destination that doesn\u2019t exist anywhere else in the Midwest."
    },
    {
      label: "Revenue Streams",
      text: "Admission and membership. Private event rental. Performance and screening tickets. Food and beverage. Retail and merchandise. Education and workshop fees. Competition hosting fees. Corporate sponsorship. Licensing and IP. The buildings support diversified revenue from day one \u2014 not dependent on any single stream, not reliant on a single season. The model is resilient. The program is broad."
    }
  ]
};

export default function STLChessSet() {
  const [activePiece, setActivePiece] = useState(null);
  const [view, setView] = useState("pieces");

  const roleSymbols = { King: "\u265A", Queen: "\u265B", Rook: "\u265C", Bishop: "\u265D", Knight: "\u265E", Pawn: "\u265F" };
  const roleOrder = ["King", "Queen", "Bishop", "Knight", "Rook", "Pawn"];

  return (
    <div style={{ minHeight: "100vh", background: "#0A0908", color: "#E8E0D4", fontFamily: "'Palatino Linotype', 'Book Antiqua', Palatino, Georgia, serif", overflow: "auto" }}>
      <div style={{ padding: "60px 40px 40px", textAlign: "center", borderBottom: "1px solid rgba(196, 162, 101, 0.2)" }}>
        <div style={{ fontSize: "11px", letterSpacing: "6px", textTransform: "uppercase", color: "#8A7D6B", marginBottom: "20px", fontFamily: "'Trebuchet MS', 'Lucida Sans', sans-serif" }}>Delmar + Trinity + Washington</div>
        <h1 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: "400", letterSpacing: "2px", margin: "0 0 8px", lineHeight: 1.2, color: "#F0E8D8" }}>Let's Play</h1>
        <div style={{ fontSize: "20px", color: "#C4A265", fontStyle: "italic", margin: "0 0 16px" }}>{"\u265A"} St. Louis, Missouri {"\u265A"}</div>
        <div style={{ fontSize: "15px", color: "#9A8E7A", fontStyle: "italic", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
          Chess is a miniature world. This is the one built in St. Louis.<br/>Every move matters.
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "32px", padding: "24px 0", borderBottom: "1px solid rgba(196, 162, 101, 0.1)" }}>
        {[{ key: "pieces", label: "The Pieces" }, { key: "board", label: "The Board" }, { key: "narrative", label: "The Game and the City" }, { key: "venue", label: "The Venue" }].map(tab => (
          <button key={tab.key} onClick={() => { setView(tab.key); setActivePiece(null); }} style={{ background: "none", border: "none", color: view === tab.key ? "#C4A265" : "#6B5F4E", fontSize: "12px", letterSpacing: "3px", textTransform: "uppercase", cursor: "pointer", padding: "8px 4px", borderBottom: view === tab.key ? "1px solid #C4A265" : "1px solid transparent", transition: "all 0.3s ease", fontFamily: "'Trebuchet MS', 'Lucida Sans', sans-serif" }}>{tab.label}</button>
        ))}
      </div>

      {view === "pieces" && (
        <div style={{ padding: "0 20px 60px" }}>
          <div style={{ maxWidth: "640px", margin: "40px auto 0", padding: "32px 28px", background: "rgba(196, 162, 101, 0.06)", border: "1px solid rgba(196, 162, 101, 0.15)", textAlign: "center" }}>
            <div style={{ fontSize: "11px", letterSpacing: "4px", textTransform: "uppercase", marginBottom: "6px", fontFamily: "'Trebuchet MS', sans-serif", color: "#C4A265" }}>St. Louis, Missouri</div>
            <div style={{ fontSize: "22px", fontWeight: "400", letterSpacing: "3px", color: "#E8D5A8", marginBottom: "12px" }}>THE ST. LOUIS SET</div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#9A8E7A", margin: 0, fontStyle: "italic" }}>St. Louis playing for its future. The landmarks, the icons, the cultural institutions engaged in a game to discover what matters most {"\u2014"} rendered in red and gold.</p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "0", margin: "32px auto 0", maxWidth: "640px", flexWrap: "wrap" }}>
            {roleOrder.map(role => (
              <button key={role} onClick={() => setActivePiece(activePiece === role ? null : role)} style={{ flex: "1 1 80px", minWidth: "80px", padding: "16px 8px", background: activePiece === role ? "rgba(196, 162, 101, 0.12)" : "transparent", border: "1px solid", borderColor: activePiece === role ? "rgba(196, 162, 101, 0.4)" : "rgba(196, 162, 101, 0.08)", color: activePiece === role ? "#C4A265" : "#6B5F4E", cursor: "pointer", textAlign: "center", transition: "all 0.3s ease" }}>
                <div style={{ fontSize: "28px", marginBottom: "4px" }}>{roleSymbols[role]}</div>
                <div style={{ fontSize: "10px", letterSpacing: "2px", textTransform: "uppercase", fontFamily: "'Trebuchet MS', sans-serif" }}>{role}</div>
              </button>
            ))}
          </div>

          {activePiece && (() => {
            const piece = pieces.find(p => p.role === activePiece);
            if (!piece) return null;
            return (
              <div key={activePiece} style={{ maxWidth: "640px", margin: "32px auto 0", animation: "fadeIn 0.4s ease", border: "1px solid rgba(196, 162, 101, 0.15)", background: "rgba(255,255,255,0.02)" }}>
                <div style={{ padding: "32px 28px", borderBottom: "1px solid rgba(196, 162, 101, 0.08)" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "36px", color: "#C4A265" }}>{roleSymbols[piece.role]}</span>
                    <div>
                      <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C4A265", fontFamily: "'Trebuchet MS', sans-serif" }}>{piece.role} {"\u2014"} {piece.height}</div>
                      <div style={{ fontSize: "24px", color: "#E8D5A8", marginTop: "4px", letterSpacing: "1px" }}>{piece.name}</div>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "24px 28px" }}>
                  <div style={{ display: "flex", gap: "12px", marginBottom: "24px", justifyContent: "center", flexWrap: "wrap" }}>
                    {piece.goldImgs.map((src, i) => (
                      <div key={"pair"+i} style={{ display: "flex", gap: "8px" }}>
                        <img src={src} alt={piece.name + " gold"} style={{ width: piece.goldImgs.length > 1 ? "120px" : "160px", borderRadius: "4px", border: "1px solid rgba(196,162,101,0.2)" }} />
                        <img src={piece.redImgs[i]} alt={piece.name + " red"} style={{ width: piece.goldImgs.length > 1 ? "120px" : "160px", borderRadius: "4px", border: "1px solid rgba(180,80,60,0.2)" }} />
                      </div>
                    ))}
                  </div>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C4A265", marginBottom: "12px", fontFamily: "'Trebuchet MS', sans-serif" }}>Form</div>
                  <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#B0A590", margin: "0 0 24px" }}>{piece.form}</p>
                  <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C4A265", marginBottom: "12px", fontFamily: "'Trebuchet MS', sans-serif" }}>Rationale</div>
                  <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#B0A590", margin: 0 }}>{piece.rationale}</p>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {view === "board" && (
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px 60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "400", letterSpacing: "2px", textAlign: "center", marginBottom: "40px", color: "#E8E0D4" }}>{boardConcept.title}</h2>
          {boardConcept.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: "20px", padding: "24px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(196,162,101,0.08)" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C4A265", marginBottom: "12px", fontFamily: "'Trebuchet MS', sans-serif" }}>{section.label}</div>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#B0A590", margin: 0 }}>{section.text}</p>
            </div>
          ))}
        </div>
      )}

      {view === "theset" && (
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px 60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "400", letterSpacing: "2px", textAlign: "center", marginBottom: "40px", color: "#E8E0D4" }}>The Set</h2>
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C4A265", marginBottom: "16px", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "center" }}>Gold</div>
            <img src={IMG.sets.goldSide} alt="Gold side" style={{ width: "100%", borderRadius: "4px", border: "1px solid rgba(196,162,101,0.15)" }} />
          </div>
          <div style={{ marginBottom: "32px" }}>
            <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#B4503C", marginBottom: "16px", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "center" }}>Red</div>
            <img src={IMG.sets.redSide} alt="Red side" style={{ width: "100%", borderRadius: "4px", border: "1px solid rgba(180,80,60,0.15)" }} />
          </div>
          <div style={{ display: "flex", gap: "16px", marginBottom: "32px" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C4A265", marginBottom: "12px", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "center" }}>Gold Pawns</div>
              <img src={IMG.sets.goldPawns} alt="Gold pawns" style={{ width: "100%", borderRadius: "4px", border: "1px solid rgba(196,162,101,0.15)" }} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#B4503C", marginBottom: "12px", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "center" }}>Red Pawns</div>
              <img src={IMG.sets.redPawns} alt="Red pawns" style={{ width: "100%", borderRadius: "4px", border: "1px solid rgba(180,80,60,0.15)" }} />
            </div>
          </div>
          <div style={{ padding: "24px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(196,162,101,0.08)" }}>
            <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#9A8E7A", margin: 0, fontStyle: "italic" }}>Two sides, one city. Red for the field: courage, the Spanish and French and American blood that built this place. Gold for the bezant: the city itself, the Louisiana Purchase, the convergence point. The distinction is finish, not allegiance. Both sides are St. Louis.</p>
          </div>
        </div>
      )}

            {view === "venue" && (
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px 60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "400", letterSpacing: "2px", textAlign: "center", marginBottom: "40px", color: "#E8E0D4" }}>{venueProgram.title}</h2>
          {venueProgram.sections.map((section, i) => (
            <div key={i} style={{ marginBottom: "20px", padding: "24px 28px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(196,162,101,0.08)" }}>
              <div style={{ fontSize: "10px", letterSpacing: "3px", textTransform: "uppercase", color: "#C4A265", marginBottom: "12px", fontFamily: "'Trebuchet MS', sans-serif" }}>{section.label}</div>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#B0A590", margin: 0 }}>{section.text}</p>
            </div>
          ))}
        </div>
      )}

      {view === "narrative" && (
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "40px 20px 60px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "400", letterSpacing: "2px", textAlign: "center", marginBottom: "40px", color: "#E8E0D4" }}>{narrativeLayer.title}</h2>
          {narrativeLayer.points.map((point, i) => (
            <div key={i} style={{ marginBottom: "28px", padding: "24px 28px", background: "rgba(255,255,255,0.02)", borderLeft: "2px solid rgba(196,162,101,0.2)" }}>
              <div style={{ fontSize: "16px", color: "#E8D5A8", marginBottom: "12px", letterSpacing: "0.5px" }}>{point.heading}</div>
              <p style={{ fontSize: "14px", lineHeight: 1.8, color: "#9A8E7A", margin: 0 }}>{point.text}</p>
            </div>
          ))}
          <div style={{ marginTop: "48px", padding: "32px 28px", background: "linear-gradient(135deg, rgba(196,162,101,0.06) 0%, rgba(196,162,101,0.02) 100%)", border: "1px solid rgba(196,162,101,0.15)", textAlign: "center" }}>
            <div style={{ fontSize: "28px", color: "#C4A265", marginBottom: "16px" }}>{"\u265A"}</div>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#B0A590", margin: 0, maxWidth: "480px", marginLeft: "auto", marginRight: "auto", fontStyle: "italic" }}>The Chess Club and the Rivers. The Cardinals and the Blues. The Clydesdales. The dome and the bell tower. The fleur-de-lis. The Arch across the board. One city, one game, one miniature world.</p>
            <div style={{ marginTop: "24px", fontSize: "20px", color: "#E8D5A8", letterSpacing: "4px" }}>Let's Play.</div>
            <div style={{ marginTop: "32px", fontSize: "11px", color: "#6B5F4E", fontStyle: "italic", lineHeight: 1.7, maxWidth: "400px", marginLeft: "auto", marginRight: "auto" }}>Every move matters.</div>
          </div>
        </div>
      )}

      <div style={{ textAlign: "center", padding: "48px 20px 32px", fontSize: "13px", color: "#8A7D6B", fontFamily: "'Trebuchet MS', sans-serif", letterSpacing: "2px", borderTop: "1px solid rgba(196,162,101,0.15)", marginTop: "48px" }}>{"\u00A9"} 2026 Pre_Post, LLC. All rights reserved.</div>
      <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
