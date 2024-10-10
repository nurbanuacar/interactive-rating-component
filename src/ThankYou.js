export default function ThankYou({ rating }) {
  return (
    <main class="container max-w-[400px] max-h-screen flex flex-col text-center rounded-3xl p-9 gap-5 bg-gradient-to-t from-Very-Dark-Blue to-Dark-Blue">
      <img
        class="w-1/2 flex"
        alt="thankyou"
        src="./illustration-thank-you.svg"
      />
      <div class="text-center mt-3">
        <span class="rounded-full bg-Dark-Blue py-2 px-4 text-Orange">
          You selected {rating} out of 5
        </span>
      </div>
      <h1 class="mt-4 text-3xl font-bold">Thank you!</h1>
      <p class="text-Light-Grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </main>
  )
}
