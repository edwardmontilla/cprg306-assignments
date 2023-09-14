import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div class="font-mono">
        <h1 style={{ fontSize: 35 }}>CPRG 306: Web Development 2 - Assignments</h1>
        <p> Name: Edward Montilla</p>
        <p> Course Section: CPRG 306 A</p>
      </div>

      <div class="font-mono">
      <Link href="https://github.com/edwardmontilla/cprg306-assignments">https://github.com/edwardmontilla/cprg306-assignments</Link>
      
      {"\n"}
      <Link href="/week2">{"\n"}Week 2</Link>
      </div>

    </main>

  )
}
