

const Newsletter = () => {
  return (
    <div className="bg-[#474747bd] p-28 text-center">
      <div className="text-4xl font-normal m-8">Subscribe Our Newsletter</div>
      <form action="">
        <input
          className="text-sm p-2 rounded-l"
          type="text"
          name="name"
          placeholder="Name:"
        />
        <input
          className="text-sm p-2 mx-2"
          type="email"
          name="email"
          placeholder="Enter your Email"
        />
        <button
          className="bg-[#E3B748] text-sm font-semibold text-black p-2 px-6 rounded-r"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default Newsletter;