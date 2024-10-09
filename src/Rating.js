import { useRef } from "react"

export default function Rating({ setRating }) {
  const itemsRef = useRef([])
  var lasti = null

  const handleClick = (i) => {
    if (lasti != null) itemsRef.current[lasti-1].classList.remove("active")
    itemsRef.current[i - 1].classList.add("active")
    lasti = i
    //setRating(i)
  }

  return (
    <main class="container max-w-[400px] max-h-screen flex flex-col rounded-3xl p-9 gap-6 bg-gradient-to-t from-Very-Dark-Blue to-Dark-Blue">
      <div class="place-self-start p-3 mb-2 rounded-full bg-Dark-Blue w-12 drop-shadow-xl">
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="fill-Orange size-6"
        >
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <h1 class="overpass-bold text-2xl">How did we do?</h1>
      <p class="text-Light-Grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div id="rating" class="flex min-h-16 gap-4 justify-between">
        {[1, 2, 3, 4, 5].map((i) => {
          return (
            <div
              onClick={() => handleClick(i)}
              ref={(el) => (itemsRef.current[i - 1] = el)}
              class="hover:cursor-pointer [&:not(.active)]:hover:bg-white hover:text-black text-center rounded-full aspect-square flex text-Light-Grey justify-center bg-Dark-Blue"
            >
              {i}
            </div>
          )
        })}
      </div>
      <button class="w-full h-12 bg-Orange rounded-full uppercase text-black overpass-bold tracking-widest">
        submit
      </button>
    </main>
  )
}
