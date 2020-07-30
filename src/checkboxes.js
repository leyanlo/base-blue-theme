import * as React from "react";
import { Checkbox, LABEL_PLACEMENT, STYLE_TYPE } from "baseui/checkbox";

export default () => {
  const [checked, setChecked] = React.useState(false);
  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        Sign up for the newsletter
      </Checkbox>
      <Checkbox
        checked={checked}
        checkmarkType={STYLE_TYPE.toggle}
        onChange={(e) => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        Sign up for the newsletter
      </Checkbox>
      <Checkbox
        checked={checked}
        checkmarkType={STYLE_TYPE.toggle_round}
        onChange={(e) => setChecked(e.target.checked)}
        labelPlacement={LABEL_PLACEMENT.right}
      >
        Sign up for the newsletter
      </Checkbox>
    </>
  );
};
