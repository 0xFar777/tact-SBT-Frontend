"use client"

export default function Introduce() {
 const containerStyle = {
  width: "96%",
  height: "auto",
  border: "1px solid #ccc",
  overflow: "auto",
  margin: "0 2% 0 2%",
 }

 const contentStyle = {
  padding: "20px",
  fontSize: "18px",
  textIndent: "2em",
  wordWrap: "break-word",
  hyphens: "auto",
  color: "#888",
  fontWeight: 700,
  fontFamily: "Courier",
 }

 const paragraph =
  "Soul-bound tokens are non-transferable; once you acquire a soul-bound token, it will be forever bound to your personal wallet and identity, unable to be sold or gifted to others. Therefore, for assets such as certificates of ability, reputation, medical records, etc., which cannot be obtained through purchase, soul-bound tokens are an ideal digital representation"

 return (
  <section className="mx-auto mt-[45px] flex max-w-7xl flex-col text-white md:flex-row">
   <div className="grow pb-5 md:py-5">
    <div className="mx-6 border-b-2 py-0 text-center text-lg font-bold">
     <span style={{ fontSize: "24px" }}>Introduce</span>
    </div>
    <div className="mt-4">
     <div style={containerStyle}>
      <div style={contentStyle}>
       <p>{paragraph}</p>
      </div>
     </div>
    </div>
   </div>
  </section>
 )
}
