export default function Footer() {
  return (
    <div className="my-20 flex justify-between items-center w-[80%] gap-4 sm:w-full border-t-[1px] p-4 sm:items-center">
      <div>
        <ul className="flex flex-col">
          <li>Privacy Policy</li>
          <li>Terms</li>
          <li>© 2023 SomeShishiWebsite</li>
        </ul>

        <img src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png" className="w-[200px]"/>
      </div>

      <div className="flex flex-col justify-between h-[200px]">
        <svg
          width="25"
          height="25"
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.017 2h-8.07A5.954 5.954 0 0 0 2 7.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 16.017 2Zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07-.001Z"></path>
          <path d="M11.982 6.82a5.17 5.17 0 0 0-5.162 5.163 5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164 5.17 5.17 0 0 0-5.165-5.162Zm0 8.32a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31Z"></path>
          <path d="M17.156 8.091a1.237 1.237 0 1 0 0-2.474 1.237 1.237 0 0 0 0 2.474Z"></path>
        </svg>

        <svg
          width="25"
          height="25"
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17 8.947c-.368.16-.763.27-1.178.318.424-.25.748-.646.902-1.117a4.16 4.16 0 0 1-1.304.49A2.06 2.06 0 0 0 13.923 8c-1.133 0-2.051.905-2.051 2.02 0 .158.018.312.053.46a5.853 5.853 0 0 1-4.228-2.11 1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98c-.303.08-.62.092-.927.034a2.049 2.049 0 0 0 1.916 1.403A4.156 4.156 0 0 1 7 15.091a5.87 5.87 0 0 0 3.144.909c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.07 4.07 0 0 0 17 8.947Z"></path>
          <path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z"></path>
        </svg>

        <svg
          width="25"
          height="25"
          fill="#000000"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.694 8.937v1.377H9.688v1.683h1.008V17h2.072v-5.003h1.39s.13-.807.194-1.69h-1.577v-1.15c0-.173.227-.404.45-.404h1.128V7h-1.534c-2.175 0-2.123 1.685-2.123 1.937Z"></path>
          <path d="M6 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6Zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Z"></path>
        </svg>
      </div>
    </div>
  );
}
