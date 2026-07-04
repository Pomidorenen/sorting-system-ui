
namespace Progresbar{
    interface IProgresBarProps extends React.HTMLAttributes<HTMLDivElement>{
        maxValue:number;
        value:number;
        size?:number;
        strokeWidth?:number;
        lowColor?:DataType.Color;
        medColor?:DataType.Color;
        highColor?:DataType.Color;
    }
}