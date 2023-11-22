// export const Button = props => {
//   console.log(props)
//     return (
//     <>
//           <button className="paragraph">
//          <span className={props.variant}/>     {props.children}
//           </button>
//       <span>some text</span>
//     </>
//   );
// };

// export const Button = props => {
//     return <button className={props.variant}>
//         {props.children}
//         {props.discount && <span className="sale">Sale</span>}
//     </button>;
// };
export const Button = ({variant, children, discount}) => {
    return <button className={variant}>
        {children}
        {discount && <span className="sale">Sale</span>}
    </button>;
};

