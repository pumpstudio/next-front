import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <title>About Us</title>
      <Center>
        <Title>About Us</Title>
        เทคโนโลยีที่ใช้ในการเขียนโปรเจคนี้
        <h3>Javascript Framework</h3>
        <ul>
          <li>Next JS</li>
          <li>React JS</li>
        </ul>
        <h3>UI Framework</h3>
        <ul>
          <li>Tailwind CSS</li>
          <li>Styled Comnonent</li>
        </ul>
        <h3>Database</h3>
        <ul>
          <li>MongoDB</li>
          <li>ใช้ Mongoose ในการเชื่อมต่อ Database</li>
          <li>ใช้ Axios ในการเชื่อมต่อ API</li>
        </ul>
        <h3>Could Server</h3>
        <ul>
          <li>Static Web : Vercel (Deploy ผ่าน Github)</li>
          <li>Images : Amazon Web Service S3</li>
        </ul>
        <h3>Login API (ใช้ใน Backend)</h3>
        <ul>
          <li>Next Auth</li>
          <li>Google API</li>
        </ul>
        <h3>Payment Gateway (Sandbox)</h3>
        <ul>
          <li>Stripe</li>
        </ul>
        <h3>Remark</h3>
        <ul>
          <li><a href="https://next-back-seven.vercel.app/">หลังบ้านระบบนี้</a> (เนื่องจากเป็น Single Admin จึงจำเป็นต้องส่ง gmail มาเปลี่ยน admin นะครับ)</li>
          <li>รูปภาพก็อปมาจาก Apple.com</li>
          <li>ความสามารถอื่นๆของผู้เขียนโปรเจค PHP MySQL WordPress(สร้าง Theme Plugin และ Custom field ได้) PSD to HTML, Laravel Voyager, CoreUI, Bootstrap, JavaScript, jQuery, LineNotify</li>
          <li>Tool อื่นๆที่เคยใช้ในการทำงาน Figma, Canva, GitHub, Gitlab, Docker, Jenkin, Trello, Asana, Jira, Time Docker, Slack, Discord etc.</li>
          <li><a href="https://www.arkomchareonyont.com/">อาคมเจริญยนต์</a> - แกะ Theme ของ Honda Thailand (Laravel) ไปประกอบใน WordPress</li>
          <li><a href="https://www.youtube.com/watch?v=VomGXglGW1Q">Plugin ระบบจองโรงแรม WordPress</a></li>
          <li>ประการณ์ทำงานในบริษัท ZealTech International 7 ปี (บริษัทเดียวยาวๆ)</li>
        </ul>
      </Center>
    </>
  )
}

