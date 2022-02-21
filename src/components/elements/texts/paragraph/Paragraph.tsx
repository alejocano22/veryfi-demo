export interface ParagraphProps {
  id?: string;
  text: string;
  color?: string;
  size?: string;
  additionalCss?: string;
}

export const Paragraph = ({
  id,
  text,
  color,
  size,
  additionalCss,
}: ParagraphProps) => {
  return (
    <p
      id={id}
      className={[
        color ? color : 'text-black',
        size ? size : 'text-base',
        additionalCss,
      ].join(' ')}
    >
      {text}
    </p>
  );
};

export default Paragraph;
