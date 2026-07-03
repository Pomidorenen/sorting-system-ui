import { CSSProperties } from "react";
import styles from "./progresbar.module.css";

function ProgresbarRing({   maxValue,value,
                            lowColor = "#f44336",   
                            medColor = "#ff9800",    
                            highColor = "#4caf50",
                            size = 120,
                            strokeWidth = 40,
                            className,style,...props}:Progresbar.IProgresBarProps){
    const  percent = Math.min(100, Math.max(0, (value / maxValue) * 100));

    var activeColor = highColor;
    if (percent <= 33) {
        activeColor = lowColor;
    } else if (percent <= 66) {
        activeColor = medColor;
    } else {
        activeColor = highColor;
    }

    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference * (1 - percent / 100);
    const displayText = `${Math.round(percent)}%`;

    return  <div
      className={`${styles["progresbar-circle-container"]} ${className || ""}`}
      style={{ width: size, height: size, ...style }}
      {...props}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className={styles.svg}
      >
        <circle
          className={styles["progress-circle"]}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={activeColor}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className={styles["progresbar-circle-label"]} style={
        {
          "--active-color":activeColor,
          "--size-bar":size+"px"
        } as CSSProperties}>{displayText}</div>
    </div>
}

export default ProgresbarRing;