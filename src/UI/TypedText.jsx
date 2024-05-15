import { TypeAnimation } from 'react-type-animation'

//! Guided by youtube: https://www.youtube.com/watch?v=I0jNBYJIyHo&t=4s

export default function TypedText() {
  return (
    <div className='typedText'>
      <h4 style={{ display: "inline" }}>I </h4>
      <TypeAnimation
        sequence={[
          "am Full Stack Web-Developer (MERN).",
          1500,
          "am proficient in CSS for styling and layout.",
          1500,
          "use Sass & Tailwind for scalable solutions.",
          1500,
          "use JavaScript for dynamic interactions.",
          1500,
          "am proficient with Vite for frontend efficiency.",
          1500,
          "build backend APIs with Express.js.",
          1500,
          "am skilled in Node.js for server-side work.",
          1500,
          "excel with MongoDB for scalability.",
          1500,
          "adapt consistently to current trends.",
          1500,
        ]}

        cursor={false}
        wrapper="h4"
        speed={55}
        deletionSpeed={25}
        repeat={Infinity}
        // preRenderFirstString={true}
        omitDeletionAnimation={true}
        style={{ display: 'inline' }}

      />
    </div>
  )
}
