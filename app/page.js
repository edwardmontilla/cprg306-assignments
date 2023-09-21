import Link from "next/link";

export default function Page() {
  return (
    <main>

      <div class="flex font-sans justify-center">
        <div>

          <div class="p-3 pt-10 mb-9">
            <h1 style={{ fontSize: 35 }}>CPRG 306: Web Development 2 - Assignments</h1>
          </div>

          <p> Name: Edward Montilla</p>
          <p> Course Section: CPRG 306 A</p>
        
          <Link href="https://github.com/edwardmontilla/cprg306-assignments">https://github.com/edwardmontilla/cprg306-assignments</Link>
        
          <ul>
            <Link href="/week2">{"\n"}Week 2</Link>
          </ul>
          <ul>
          <Link href="/week3">{"\n"}Week 3</Link>
          </ul>
        </div>
      
      </div>

    </main>

  )
}
