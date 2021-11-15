import styled from 'styled-components';

export default function Hero() {
  return (
    <section className="py-6 bg-violet-600 text-coolGray-50">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-5xl font-bold leading-none text-center">
          Something totally different
        </h1>
        <p className="pt-2 pb-8 text-xl font-medium text-center">
          Eum omnis itaque harum at quae sequi unde similique alias asperiores
          totam. Ex cumque maxime harum doloremque, tempore nam fugiat
          aspernatur rerum ipsa unde est modi commodi molestias maiores eveniet
          eius esse asperiores neque dicta ea quisquam? Excepturi sapiente
          officiis explicabo ab?
        </p>
        <button
          type="button"
          className="px-8 py-3 text-lg font-semibold rounded bg-coolGray-100 text-coolGray-900"
        >
          Learn more
        </button>
      </div>
    </section>
  );
}
