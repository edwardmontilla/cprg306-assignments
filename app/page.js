import Link from "next/link";

export default function Page() {
  return (
    <main class="h-screen bg-gray-900">

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

          </div>
          
        </div>
      
      </div>

    </main>

  )
}
