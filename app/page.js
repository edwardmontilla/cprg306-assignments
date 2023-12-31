import Link from "next/link";

export default function Page() {
  return (
    <main class="h-screen bg-sky-950">

      <div class="flex font-sans justify-center">
        <div>

          <div class="p-3 pt-10 mb-9">
            <h1 style={{ fontSize: 35 }}>CPRG 306: Web Development 2 - Assignments</h1>
          </div>

          <p> Name: Edward Montilla</p>
          <p> Course Section: CPRG 306 A</p>

          <div class="hover:underline underline-offset-2">
            <Link href="https://github.com/edwardmontilla/cprg306-assignments">https://github.com/edwardmontilla/cprg306-assignments</Link>
          </div>

          <div class="flex-container mt-5 shrink w-14">
          
            <ul class="mb-2 hover:underline underline-offset-2">
              <Link href="/week2">{"\n"}Week 2</Link>
            </ul>  
            <ul class="mb-2 hover:underline underline-offset-2">  
              <Link href="/week3">{"\n"}Week 3</Link>
            </ul>  
            <ul class="mb-2 hover:underline underline-offset-2">  
              <Link href="/week4">{"\n"}Week 4</Link>
            </ul>
            <ul class="mb-2 hover:underline underline-offset-2">  
              <Link href="/week5">{"\n"}Week 5</Link>
            </ul>
            <ul class="mb-2 hover:underline underline-offset-2">  
              <Link href="/week6">{"\n"}Week 6</Link>
            </ul>
            <ul class="mb-2 hover:underline underline-offset-2">  
              <Link href="/week7">{"\n"}Week 7</Link>
            </ul>
            <ul class="mb-2 hover:underline underline-offset-2">  
              <Link href="/week8">{"\n"}Week 8</Link>
            </ul>
            <ul class="mb-2 hover:underline underline-offset-2">  
              <Link href="/week10">{"\n"}Week 10</Link>
            </ul>
            <ul class="mb-2 hover:underline underline-offset-2">  
              <Link href="/museum_api">{"\n"}Demo_API</Link>
            </ul>


          </div>
          
        </div>
      
      </div>

    </main>

  )
}
