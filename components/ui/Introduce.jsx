"use client"

import "@/components/ui/style-pc.css"

export default function Introduce() {
 const containerStyle = {
  width: "96%",
  height: "700px",
  border: "1px solid #ccc",
  overflow: "auto",
  margin:"0 2% 0 2%",
 }
 const contentStyle = {
  padding: "20px",
  fontSize:  "18px",
 }

 const paragraph1 =
  "X represents the unknown and possibility. The history of human civilization is a story full of exploration and innovation. We continuously surpass ourselves, pursuing higher goals. The development of artificial intelligence accelerates the efficiency of human exploration into the unknown. Humanity is on the verge of entering an X era full of infinite possibilities."

 const paragraph2 =
  ".X is not just a domain name, but also represents a digital identity, and is moreover a testament and symbol of humanity's emergence as an advanced civilization in the universe. The introduction of .X aims to lead the X era, enabling every user to participate in the construction of the digital age. Through registration, users can hold .X for life. Through technological innovation and open, decentralized design, .X will become the bridge connecting users to the digital world."

 const paragraph3 =
  "In the future, we will gradually launch autonomous community, mall, university, and metaverses, all of which will be built on the foundation of .X. We cordially invite users from around the world who are eager to follow the trend to register and obtain a cosmic identity card, and together become participants in this feast of the X era."

 return (
  <section className="mx-auto mt-[45px] flex max-w-7xl flex-col text-white md:flex-row">
   <div className="grow pb-5 md:py-5">
    <div className="mx-6 border-b-2 py-0 text-center text-lg font-bold md:leading-7">
     <span style={{ fontSize: "24px" }}>Overview</span>
    </div>
    <div className="mt-6">
     <div style={containerStyle}>
      <div style={contentStyle}>
       <p className="content-p">{paragraph1}</p>
       <br />
       <p className="content-p">{paragraph2}</p>
       <br />
       <p className="content-p">{paragraph3}</p>
       <br />
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}
