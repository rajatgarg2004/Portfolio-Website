export default function Footer({footerColor}){
    return(
        <footer className={`bg-${footerColor} p-6`}>
            <ul className="flex flex-wrap justify-between">
                <li className="flex w-[33%] sm:w-auto lg:w-auto md:w-auto m-auto justify-center"><a href="https://www.linkedin.com/in/rajat-garg-72b15a226" target="_blank" rel="noreferrer"><img src="/Linkedin.svg" alt="LINKEDIN" /></a></li>
                <li className="flex w-[33%] sm:w-auto lg:w-auto md:w-auto m-auto justify-center"><a href="https://www.github.com/rajatgarg2004" target="_blank" rel="noreferrer"><img src="/Github.svg" alt="GITHUB" /></a></li>
                <li className="flex w-[33%] sm:w-auto lg:w-auto md:w-auto m-auto justify-center"><a href="https://www.leetcode.com/rajatgarg2004" target="_blank" rel="noreferrer"><img src="/Leetcode.svg" alt="LEETCODE" /></a></li>
                <li className="flex w-[33%] sm:w-auto lg:w-auto md:w-auto m-auto justify-center"><a href="https://www.codechef.com/users/yeetgod68" target="_blank" rel="noreferrer"><img src="/Codechef.svg" alt="CODECHEF" /></a></li>
                <li className="flex w-[33%] sm:w-auto lg:w-auto md:w-auto m-auto justify-center"><a href="https://www.hackerrank.com/rajatgarg2004" target="_blank" rel="noreferrer"><img src="/Hackerrank.svg" alt="HACKERRANK" /></a></li>
                <li className="flex w-[33%] sm:w-auto lg:w-auto md:w-auto m-auto justify-center"><a href="https://www.naukri.com/code360/profile/8d636cc8-19b7-4110-bca4-0dde587737c6" target="_blank" rel="noreferrer"><img src="/CodingNinjas.svg" alt="CodingNinjas" /></a></li>
            </ul>
        </footer>
    );
}