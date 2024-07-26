"use client";

const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "87c956d1-bcee-482c-8669-b714fbf34d96");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="flex flex-col justify-center text-4xl py-20">
      <div>
        <h1 className="text-white font-bold text-center">
          Contact <span className="text-blue-400">Me</span>
        </h1>
      </div>
      <section className="flex justify-center align-center mt-20 text-3xl">
        <form onSubmit={onSubmit}>
          <div className="input-box">
            <label className="text-white flex flex-row mb-3">Full Name</label>
            <input
              type="text"
              className="md:w-[30vw] border-solid border-2 border-white rounded-lg w-[90vw] mb-5 p-3 text-2xl bg-black text-white"
              placeholder="Enter your email"
              name="name"
              required
            />
          </div>
          <div className="input-box">
            <label className="text-white flex flex-row mb-3">
              Email Address
            </label>
            <input
              type="email"
              className="md:w-[30vw] border-solid border-2 border-white rounded-lg w-[90vw] mb-5 p-3 text-2xl bg-black text-white"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="input-box">
            <label className="text-white flex flex-row mb-3">
              Your Message
            </label>
            <textarea
              name="message"
              className="md:w-[30vw] border-solid border-2 border-white rounded-lg w-[90vw] h-[20vh] mb-5 p-3 text-2xl bg-black text-white overflow-auto scrollbar-hide resize-none"
              placeholder="Enter your message"
              required
            />
          </div>
          <div className="flex justify-center">
            <button className="mt-4 hover:scale-110 shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              Submit
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
