import { useAccordionContext } from "./Accordion"

const AccordionItem = ({title, children, className, id}) => {

    // use the custom hook to acces 
    const {isAccordion, toggleContext} = useAccordionContext()

    //then pass the useState variable and then acces it to id props
    const isOpen = isAccordion === id
        
    return(
        <li className={className}>
            <h1 onClick={() => toggleContext(id)} className=" mt-2 text-center mx-16  font-bold text-2xl uppercase cursor-pointer">{title}</h1>
            <div className={isOpen ? 'accordion-item-content open':'accordion-item-content close'}>{children}</div>
        </li>
    )
}

export default AccordionItem