import * as React from "react";
import { useStyletron } from "baseui";
import { Button, KIND } from "baseui/button";

export default () => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: "grid",
        gridTemplateColumns: "repeat(4, 100px)",
        gap: "4px"
      })}
    >
      {[KIND.primary, KIND.secondary, KIND.tertiary, KIND.minimal].map(kind => (
        <React.Fragment key={kind}>
          <Button kind={kind}>{kind}</Button>
          <Button kind={kind} isLoading>
            loading
          </Button>
          <Button kind={kind} isSelected>
            selected
          </Button>
          <Button kind={kind} disabled>
            disabled
          </Button>
        </React.Fragment>
      ))}
    </div>
  );
};
