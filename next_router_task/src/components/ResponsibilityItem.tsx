interface Props{
    description:string;
}
const ResponsibilityItem = ({description}:Props) => {
  return (
    <li className="flex items-center mt-3">
            <img className="w-6 h-6 mr-2" src="/assets/checkmark.svg" alt="" />
            <span>
              {description}
            </span>
          </li>
  )
}

export default ResponsibilityItem