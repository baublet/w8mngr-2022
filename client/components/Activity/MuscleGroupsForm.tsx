import * as React from "react";
import PanelInverted from "../Containers/PanelInverted";
import muscleGroups from "shared/data/activity/muscleGroups";
import setCharAt from "shared/helpers/setCharAt";

interface MuscleGroupsProps {
  values: string;
  handleValueUpdate: (values: string) => void;
}

function muscleGroupPosition(group: string): number {
  return muscleGroups.indexOf(group);
}

function muscleGroupsToClassMap(groupsValues: string): any {
  const groupsMap = {};
  muscleGroups.forEach((group: string, index: number) => {
    groupsMap[group] = "muscleGroup";
    if (groupsValues[index] == "1") {
      groupsMap[group] += " muscleGroup--selected";
    }
  });
  return groupsMap;
}

export default function MuscleGroups(props: MuscleGroupsProps) {
  const [selectedMuscles, setSelectedMuscles] = React.useState(props.values);

  React.useEffect(() => {
    props.handleValueUpdate(selectedMuscles);
  });

  const flipFn = (position: number) => () => {
      const newValue = selectedMuscles[position] == "1" ? "0" : "1";
      setSelectedMuscles(setCharAt(selectedMuscles, position, newValue));
    },
    flipGroupFn = (group: string) => () => {
      const newValue =
        selectedMuscles[muscleGroupPosition(group)] == "1" ? "0" : "1";
      setSelectedMuscles(
        setCharAt(selectedMuscles, muscleGroupPosition(group), newValue)
      );
    };

  const groupsClassMap = muscleGroupsToClassMap(selectedMuscles);

  const checkBoxes = ((values: string) => {
    const inputs = [];
    for (let i = 0; i < values.length; i++) {
      const checked = selectedMuscles[i] == "1" ? true : false,
        classes = `block py-2 text-xs font-bold uppercase ${
          !checked ? "text-foregroundLight" : "text-secondaryLight"
        }`;
      inputs.push(
        <div key={i}>
          <input
            name={muscleGroups[i]}
            id={muscleGroups[i]}
            type="checkbox"
            className="screen-reader-text"
            onChange={flipFn(i)}
            checked={checked}
          />
          <label htmlFor={muscleGroups[i]} className={classes}>
            {muscleGroups[i]}
          </label>
        </div>
      );
    }
    return <>{inputs}</>;
  })(props.values);

  return (
    <PanelInverted>
      <div
        style={{
          columns: 3
        }}
      >
        {checkBoxes}
      </div>
      <svg
        viewBox="0 0 176 207"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
        style={{
          width: "100%",
          height: "auto",
          overflow: "visible",
          margin: "1rem 0 0"
        }}
      >
        <g
          id="Back-Muscles"
          transform="matrix(1.02471 0 0 1.08671 -4.336 -12.428)"
        >
          <path
            d="M161.16,75.539C161.235,75.924 161.897,72.591 162.726,72.959C163.555,73.328 164.578,75.543 164.569,75.447C164.309,72.719 166.752,68.475 168.531,65.588C170.463,62.451 171.471,62.269 172.769,58.217C173.287,56.602 172.769,46.054 174.981,42.184C177.192,38.314 178.758,38.711 180.417,37.762C180.779,37.554 166.841,36.453 165.639,27.043C165.44,25.487 165.427,24.07 165.674,22.651C165.921,21.231 158.427,20.656 158.027,22.558C157.415,25.465 162.589,33.764 144.943,36.472C143.704,36.662 148.598,38.551 151.3,42.645C151.959,43.643 151.947,46.011 153.973,59.322C154.425,62.299 160.294,71.108 161.16,75.539Z"
            className={groupsClassMap["trapezius"]}
            onClick={flipGroupFn("trapezius")}
            transform="translate(-31.69 .827)"
            id="Trapezius"
          />
          <g id="Lats">
            <path
              d="M165.212,75.512C165.212,75.512 170.26,80.67 170.809,83.743C171.358,86.816 171.366,92.391 173.992,91.974C174.026,91.968 173.096,89.936 174.317,87.838C178.51,80.632 178.711,72.219 178.711,72.219L180.138,58.5C180.138,58.5 176.222,59.894 173.114,57.842C172.491,57.431 172.858,62.613 169.862,65.315C168.637,66.42 164.004,72.439 165.212,75.512Z"
              className={groupsClassMap["lats"]}
              onClick={flipGroupFn("lats")}
              transform="translate(-30.945)"
            />
            <path
              d="M165.212,75.512C165.212,75.512 170.26,80.67 170.809,83.743C171.358,86.816 171.366,92.391 173.992,91.974C174.026,91.968 173.096,89.936 174.317,87.838C178.51,80.632 178.711,72.219 178.711,72.219L180.138,58.5C180.138,58.5 176.222,59.894 173.114,57.842C172.491,57.431 172.858,62.613 169.862,65.315C168.637,66.42 164.004,72.439 165.212,75.512Z"
              className={groupsClassMap["lats"]}
              onClick={flipGroupFn("lats")}
              transform="matrix(-1 0 0 1 292.913 0)"
            />
          </g>
          <g id="Triceps">
            <path
              d="M180.138,49.285C180.138,49.285 183.852,46.688 185.161,47.435C186.47,48.183 188.9,52.95 189.18,54.913C189.461,56.876 190.676,72.486 190.676,72.486C190.676,72.486 190.208,74.431 188.9,74.907C187.591,75.384 187.779,70.849 186.787,70.353C185.795,69.857 186.742,73.869 185.75,74.184C184.758,74.5 181.873,73.103 181.873,73.103L179.679,66.657C179.679,66.657 181.737,52.739 180.138,49.285Z"
              className={groupsClassMap["triceps"]}
              onClick={flipGroupFn("triceps")}
              transform="translate(-30.945)"
            />
            <path
              d="M180.138,49.285C180.138,49.285 183.852,46.688 185.161,47.435C186.47,48.183 188.9,52.95 189.18,54.913C189.461,56.876 190.676,72.486 190.676,72.486C190.676,72.486 190.208,74.431 188.9,74.907C187.591,75.384 187.779,70.849 186.787,70.353C185.795,69.857 186.742,73.869 185.75,74.184C184.758,74.5 181.873,73.103 181.873,73.103L179.679,66.657C179.679,66.657 181.737,52.739 180.138,49.285Z"
              className={groupsClassMap["triceps"]}
              onClick={flipGroupFn("triceps")}
              transform="matrix(-1 0 0 1 292.735 0)"
            />
          </g>
          <g id="Forearms">
            <path
              d="M190.676,73.323C190.676,73.323 194.403,79.228 195.153,83.727C195.903,88.226 195.059,97.131 197.215,99.193C199.371,101.255 190.979,102.942 190.676,100.88C190.373,98.818 181.176,83.279 182.218,80.447C182.5,79.681 181.937,73.042 181.937,73.042L185.178,74.907C185.178,74.907 185.873,77.728 184.28,78.572C182.687,79.416 185.217,81.853 186.248,80.822C187.279,79.79 187.936,77.822 189.154,77.447C190.373,77.072 188.217,75.343 188.967,74.942C189.716,74.542 190.676,73.323 190.676,73.323Z"
              className={groupsClassMap["forearms"]}
              onClick={flipGroupFn("forearms")}
              transform="translate(-30.945)"
            />
            <path
              d="M190.676,73.323C190.676,73.323 194.403,79.228 195.153,83.727C195.903,88.226 195.059,97.131 197.215,99.193C199.371,101.255 190.979,102.942 190.676,100.88C190.373,98.818 181.176,83.279 182.218,80.447C182.5,79.681 181.937,73.042 181.937,73.042L185.178,74.907C185.178,74.907 185.873,77.728 184.28,78.572C182.687,79.416 185.217,81.853 186.248,80.822C187.279,79.79 187.936,77.822 189.154,77.447C190.373,77.072 188.217,75.343 188.967,74.942C189.716,74.542 190.676,73.323 190.676,73.323Z"
              className={groupsClassMap["forearms"]}
              onClick={flipGroupFn("forearms")}
              transform="matrix(-1 0 0 1 293.046 0)"
            />
          </g>
          <g id="Glutes">
            <path
              d="M147.846,92.187C148.535,91.902 160.874,95.712 163.173,105.215C165.472,114.718 159.341,119.623 153.363,119.163C147.386,118.703 146.487,111.077 146.318,109.233C146.198,107.917 146.705,104.792 146.398,97.557C146.344,96.304 147.156,92.473 147.846,92.187Z"
              className={groupsClassMap["glutes"]}
              onClick={flipGroupFn("glutes")}
              transform="matrix(1.09042 .21206 -.1909 .9816 -27.396 -31.97)"
            />
            <path
              d="M147.846,92.187C148.535,91.902 160.874,95.712 163.173,105.215C165.472,114.718 159.341,119.623 153.363,119.163C147.386,118.703 146.487,111.077 146.318,109.233C146.198,107.917 146.705,104.792 146.398,97.557C146.344,96.304 147.156,92.473 147.846,92.187Z"
              className={groupsClassMap["glutes"]}
              onClick={flipGroupFn("glutes")}
              transform="matrix(-1.0424 0 0 1 301.502 -1.109)"
            />
          </g>
          <g id="Hamstrings">
            <path
              d="M164.903,118.639C164.903,118.639 177.25,119.126 179.208,117.408C181.166,115.69 181.688,126.804 179.208,138.814C176.728,150.823 178.292,152.164 177.928,151.849C175.19,149.477 173.543,143.552 173.351,143.696C173.199,143.81 167.647,152.009 168.559,158.396C168.612,158.763 163.357,129.421 162.575,125.854C161.792,122.287 160.61,119.028 164.903,118.639Z"
              className={groupsClassMap["hamstrings"]}
              onClick={flipGroupFn("hamstrings")}
              transform="translate(-30.945)"
            />
            <path
              d="M164.903,118.639C164.903,118.639 177.25,119.126 179.208,117.408C181.166,115.69 181.688,126.804 179.208,138.814C176.728,150.823 178.292,152.164 177.928,151.849C175.19,149.477 173.543,143.552 173.351,143.696C173.199,143.81 167.647,152.009 168.559,158.396C168.612,158.763 163.357,129.421 162.575,125.854C161.792,122.287 162.403,118.748 164.903,118.639Z"
              className={groupsClassMap["hamstrings"]}
              onClick={flipGroupFn("hamstrings")}
              transform="matrix(-.9948 0 0 1 291.883 0)"
            />
          </g>
          <g id="Calves">
            <path
              d="M173.756,152.303C173.756,152.303 168.039,159.411 167.661,162.31C167.282,165.208 167.274,179.227 168.338,181.663C169.116,183.445 172.926,177.702 173.882,174.103C174.839,170.503 173.869,177.443 176.277,180.025C176.683,180.461 180.951,166.272 179.724,161.571C178.022,155.053 177.379,153.203 177.81,150.181C178.488,145.429 175.237,152.303 174.764,154.445C174.292,156.587 173.756,152.303 173.756,152.303Z"
              className={groupsClassMap["calves"]}
              onClick={flipGroupFn("calves")}
              transform="translate(-30.945)"
            />
            <path
              d="M173.756,152.303C173.756,152.303 168.039,159.411 167.661,162.31C167.282,165.208 167.274,179.227 168.338,181.663C169.116,183.445 172.926,177.702 173.882,174.103C174.839,170.503 173.869,177.443 176.277,180.025C176.683,180.461 180.951,166.272 179.724,161.571C178.022,155.053 177.379,153.203 177.81,150.181C178.488,145.429 175.237,152.303 174.764,154.445C174.292,156.587 173.756,152.303 173.756,152.303Z"
              className={groupsClassMap["calves"]}
              onClick={flipGroupFn("calves")}
              transform="matrix(-1 0 0 1 292.927 0)"
            />
          </g>
        </g>
        <g
          id="Front-Muscles"
          transform="matrix(1.02471 0 0 1.08671 -4.336 -12.428)"
        >
          <g id="Deltoids">
            <path
              d="M36.583,38.544C36.583,38.544 24.151,31.459 19.071,42.02C17.202,45.905 18.612,58.166 18.67,58.73C18.708,59.103 22.359,50.85 25.487,49.105C26.024,48.806 25.343,40.795 36.583,38.544Z"
              className={groupsClassMap["deltoids"]}
              onClick={flipGroupFn("deltoids")}
              transform="translate(-.973 -.492)"
            />
            <path
              d="M36.583,38.544C36.583,38.544 24.151,31.459 19.071,42.02C17.202,45.905 18.612,58.166 18.67,58.73C18.708,59.103 22.359,50.85 25.487,49.105C26.024,48.806 25.343,40.795 36.583,38.544Z"
              className={groupsClassMap["deltoids"]}
              onClick={flipGroupFn("deltoids")}
              transform="matrix(-1 0 0 1 88.972 -.492)"
            />
          </g>
          <g id="Biceps">
            <path
              d="M26.136,48.783C26.136,48.783 27.24,65.568 25.949,66.318C24.468,67.178 23.711,75.459 23.711,75.459C23.711,75.459 22.965,73.36 22.125,73.453C21.286,73.547 19.7,75.132 19.374,75.692C19.047,76.251 14.151,58.39 26.136,48.783Z"
              className={groupsClassMap["biceps"]}
              onClick={flipGroupFn("biceps")}
              transform="translate(-.977 .063)"
            />
            <path
              d="M26.136,48.783C26.136,48.783 27.24,65.568 25.949,66.318C24.468,67.178 23.711,75.459 23.711,75.459C23.711,75.459 22.965,73.36 22.125,73.453C21.286,73.547 19.7,75.132 19.374,75.692C19.047,76.251 14.151,58.39 26.136,48.783Z"
              className={groupsClassMap["biceps"]}
              onClick={flipGroupFn("biceps")}
              transform="matrix(-1 0 0 1 89.59 2.227)"
            />
          </g>
          <g id="Pectorals">
            <path
              d="M43.654,40.144C43.334,44.244 45.72,49.36 45.751,52.43C45.792,56.587 45.411,59.947 38.07,60.764C32.17,61.421 30.843,58.977 28.931,57.76C27.738,57.001 27.372,49.143 26.283,47.956C25.538,47.144 30.39,38.787 37.113,38.846C43.836,38.905 43.722,39.284 43.654,40.144Z"
              className={groupsClassMap["pectorals"]}
              onClick={flipGroupFn("pectorals")}
              transform="translate(-.434 1.019) scale(.97165)"
            />
            <path
              d="M43.654,40.144C43.334,44.244 45.72,49.36 45.751,52.43C45.792,56.587 45.411,59.947 38.07,60.764C32.17,61.421 30.843,58.977 28.931,57.76C27.738,57.001 27.372,49.143 26.283,47.956C25.538,47.144 30.39,38.787 37.113,38.846C43.836,38.905 43.722,39.284 43.654,40.144Z"
              className={groupsClassMap["pectorals"]}
              onClick={flipGroupFn("pectorals")}
              transform="matrix(-.97165 0 0 .97165 88.479 1.019)"
            />
          </g>
          <g id="Obliques">
            <path
              d="M36.583,62.749C36.583,62.749 37.978,94.557 36.583,95.693C35.188,96.829 34.904,89.351 29.792,88.499C28.84,88.34 29.629,71.269 27.344,67.199C25.059,63.128 35.611,61.424 36.583,62.749Z"
              className={groupsClassMap["obliques"]}
              onClick={flipGroupFn("obliques")}
              transform="translate(-.65)"
            />
            <path
              d="M36.583,62.749C36.583,62.749 37.978,94.557 36.583,95.693C35.188,96.829 34.904,89.351 29.792,88.499C28.84,88.34 29.629,71.269 27.344,67.199C25.059,63.128 35.611,61.424 36.583,62.749Z"
              className={groupsClassMap["obliques"]}
              onClick={flipGroupFn("obliques")}
              transform="matrix(-1 0 0 1 88.426 0)"
            />
          </g>
          <g transform="translate(-2.294 -.644)">
            <path
              d="M46.564,60.834C46.564,60.834 40.679,58.966 38.004,62.307C35.329,65.649 38.469,78.605 37.755,83.42C37.042,88.235 41.048,108.221 43.087,108.984C44.354,109.458 45.23,109.552 46.653,108.895C47.91,108.314 53.78,95.012 54.549,83.301C54.905,77.884 59.405,61.572 51.557,60.388C47.019,59.703 46.564,60.834 46.564,60.834Z"
              className={groupsClassMap["abs"]}
              onClick={flipGroupFn("abs")}
              id="Abs"
            />
          </g>
          <g id="Quads">
            <path
              d="M31.462,95.811C31.462,95.811 42.535,119.444 41.73,130.509C40.925,141.574 39.718,145.396 39.718,148.213C39.718,151.029 40.079,144.004 36.553,143.988C32.421,143.969 29.334,147.32 28.215,151.011C28.056,151.538 27.216,140.514 27.216,140.514C27.216,140.514 25.8,137.476 24.83,127.273C23.362,111.825 35.129,106.258 31.462,95.811"
              className={groupsClassMap["quads"]}
              onClick={flipGroupFn("quads")}
            />
            <path
              d="M31.462,95.811C31.462,95.811 42.535,119.444 41.73,130.509C40.925,141.574 39.718,145.396 39.718,148.213C39.718,151.029 40.079,144.004 36.553,143.988C32.421,143.969 29.334,147.32 28.215,151.011C28.056,151.538 27.216,140.514 27.216,140.514C27.216,140.514 25.8,137.476 24.83,127.273C23.362,111.825 35.129,106.258 31.462,95.811"
              className={groupsClassMap["quads"]}
              onClick={flipGroupFn("quads")}
              transform="matrix(-1 0 0 1 87.717 0)"
            />
          </g>
          <g id="Adductors">
            <path
              d="M34.61,93.86C34.61,93.86 38.841,105.576 40.494,108.72C42.948,113.388 44.349,117.167 43.981,117.769C43.613,118.371 42.727,127.569 42.661,126.735C42.188,120.718 35.211,97.411 34.069,95.811C33.439,94.929 34.606,93.854 34.61,93.86Z"
              className={groupsClassMap["adductors"]}
              onClick={flipGroupFn("adductors")}
            />
            <path
              d="M34.61,93.86C34.61,93.86 38.841,105.576 40.494,108.72C42.948,113.388 44.349,117.167 43.981,117.769C43.613,118.371 42.727,127.569 42.661,126.735C42.188,120.718 35.211,97.411 34.069,95.811C33.439,94.929 34.606,93.854 34.61,93.86Z"
              className={groupsClassMap["adductors"]}
              onClick={flipGroupFn("adductors")}
              transform="matrix(-1 0 0 1 87.572 0)"
            />
          </g>
        </g>
        <path
          d="M103.163,117.876C102.859,121.456 106.391,140.488 107.645,147.918C108.242,151.438 109.879,157.173 109.29,160.218C108.449,164.462 108.206,169.954 108.669,173.152C108.961,175.094 109.88,184.051 108.565,187.327C107.877,189.045 106.616,197.849 106.616,197.849C103.331,206.143 105.185,205.735 105.185,205.735C106.202,206.983 107.944,205.833 107.944,205.833C109.271,206.679 110.19,205.632 110.19,205.632C111.329,206.575 112.657,205.516 112.657,205.516C114.088,206.259 115.415,204.889 115.415,204.889C116.237,205.303 116.438,204.78 116.438,204.78C118.904,204.622 115.062,196.73 115.062,196.73C114.142,189.642 115.975,185.697 115.975,185.697C121.979,167.892 122.284,163.167 119.884,156.457C119.208,154.52 119.037,153.753 119.348,152.912C120.067,150.971 119.543,143.164 120.42,140.064C122.112,134.085 123.781,118.922 124.651,111.847C125.82,102.317 120.51,89.539 120.51,89.539C119.347,84.339 121.052,65.812 121.052,65.812C123.433,69.517 123.342,76.057 123.342,76.057C122.964,82.916 128.883,93.399 128.883,93.399C131.727,97.731 132.804,101.841 132.804,102.146C132.804,103.394 132.531,106.415 132.531,106.415L132.64,109.046C132.689,109.716 133.066,112.023 133.005,113.138C132.561,120 133.651,118.709 133.651,118.709C134.571,118.709 135.582,113.187 135.582,113.187C135.582,114.611 135.234,118.874 136.002,120.482C136.921,122.4 137.597,120.153 137.609,119.702C137.852,110.965 138.377,113.254 138.377,113.254C138.888,120.342 139.516,121.943 140.642,121.389C141.495,120.982 140.715,112.883 140.715,112.883C142.176,117.694 143.284,118.46 143.284,118.46C145.695,120.153 144.204,115.477 143.869,114.551C142.085,109.631 142.03,107.926 142.03,107.926C144.259,112.347 145.939,112.183 145.939,112.183C148.113,111.489 144.039,105.229 141.652,102.23C140.434,100.702 138.863,98.656 138.407,97.441C137.664,95.383 137.103,88.767 137.103,88.767C136.878,80.96 134.948,77.569 134.948,77.569C131.648,72.287 131.027,62.434 131.027,62.434L130.881,45.799C129.724,34.452 121.363,34.37 121.363,34.37C112.912,33.112 111.736,30.382 111.736,30.382C109.946,27.806 110.969,22.868 110.969,22.868C112.454,21.66 113.027,18.453 113.027,18.453C115.493,16.562 115.372,13.795 114.233,13.825C113.319,13.849 113.526,13.092 113.526,13.092C115.068,0.636 104.01,0 104.01,0L102.322,0C102.322,0 91.259,0.636 92.799,13.089C92.799,13.089 93.006,13.847 92.084,13.822C90.948,13.792 90.842,16.559 93.299,18.45C93.299,18.45 93.871,21.656 95.357,22.865C95.357,22.865 96.38,27.803 94.59,30.379C94.59,30.379 93.418,33.109 84.963,34.367C84.963,34.367 76.588,34.449 75.449,45.796L75.291,62.431C75.291,62.431 74.682,72.284 71.369,77.566C71.369,77.566 69.448,80.958 69.226,88.764C69.226,88.764 68.663,95.38 67.923,97.438C67.472,98.647 65.902,100.693 64.674,102.227C62.266,105.22 58.219,111.467 60.384,112.18C60.384,112.18 62.073,112.344 64.293,107.923C64.293,107.923 64.247,109.616 62.466,114.548C62.116,115.462 60.627,120.138 63.039,118.457C63.039,118.457 64.156,117.69 65.608,112.88C65.608,112.88 64.829,120.979 65.696,121.386C66.829,121.941 67.447,120.339 67.958,113.251C67.958,113.251 68.482,110.962 68.725,119.699C68.737,120.15 69.398,122.397 70.321,120.479C71.1,118.871 70.75,114.615 70.75,113.184C70.75,113.184 71.749,118.706 72.683,118.706C72.683,118.706 73.782,119.997 73.331,113.135C73.258,112.014 73.651,109.713 73.7,109.043L73.806,106.412C73.806,106.412 73.532,103.398 73.532,102.143C73.532,101.832 74.61,97.728 77.453,93.396C77.453,93.396 83.366,82.908 82.985,76.054C82.985,76.054 82.903,69.514 85.284,65.809C85.284,65.809 86.974,84.335 85.829,89.536C85.829,89.536 80.51,102.314 81.683,111.844C82.547,118.938 84.213,134.081 85.909,140.061C86.795,143.155 86.271,150.96 86.981,152.909C87.301,153.756 87.133,154.536 86.445,156.454C84.058,163.164 84.362,167.89 90.366,185.694C90.366,185.694 92.214,189.639 91.28,196.727C91.28,196.727 87.444,204.619 89.901,204.777C89.901,204.777 90.093,205.3 90.924,204.886C90.924,204.886 92.251,206.256 93.685,205.513C93.685,205.513 95.013,206.573 96.148,205.629C96.148,205.629 97.058,206.676 98.385,205.83C98.385,205.83 100.127,207.005 101.162,205.732C101.162,205.732 103.001,206.14 99.727,197.846C99.727,197.846 98.473,189.053 97.782,187.324C96.464,184.049 97.395,175.073 97.676,173.149C98.129,169.933 97.886,164.454 97.058,160.215C96.452,157.177 98.093,151.441 98.699,147.915C99.944,140.492 103.163,117.876 103.163,117.876Z"
          fill="none"
          className="bodyOutline"
          strokeWidth="1.01"
          transform="matrix(1.01087 0 0 1.07204 -63.553 -10.487)"
          id="Front"
        />
        <path
          d="M103.163,117.876C102.859,121.456 106.391,140.488 107.645,147.918C108.242,151.438 109.879,157.173 109.29,160.218C108.449,164.462 108.206,169.954 108.669,173.152C108.961,175.094 109.88,184.051 108.565,187.327C107.877,189.045 106.616,197.849 106.616,197.849C103.331,206.143 105.185,205.735 105.185,205.735C106.202,206.983 107.944,205.833 107.944,205.833C109.271,206.679 110.19,205.632 110.19,205.632C111.329,206.575 112.657,205.516 112.657,205.516C114.088,206.259 115.415,204.889 115.415,204.889C116.237,205.303 116.438,204.78 116.438,204.78C118.904,204.622 115.062,196.73 115.062,196.73C114.142,189.642 115.975,185.697 115.975,185.697C121.979,167.892 122.284,163.167 119.884,156.457C119.208,154.52 119.037,153.753 119.348,152.912C120.067,150.971 119.543,143.164 120.42,140.064C122.112,134.085 123.781,118.922 124.651,111.847C125.82,102.317 120.51,89.539 120.51,89.539C119.347,84.339 121.052,65.812 121.052,65.812C123.433,69.517 123.342,76.057 123.342,76.057C122.964,82.916 128.883,93.399 128.883,93.399C131.727,97.731 132.804,101.841 132.804,102.146C132.804,103.394 132.531,106.415 132.531,106.415L132.64,109.046C132.689,109.716 133.066,112.023 133.005,113.138C132.561,120 133.651,118.709 133.651,118.709C134.571,118.709 135.582,113.187 135.582,113.187C135.582,114.611 135.234,118.874 136.002,120.482C136.921,122.4 137.597,120.153 137.609,119.702C137.852,110.965 138.377,113.254 138.377,113.254C138.888,120.342 139.516,121.943 140.642,121.389C141.495,120.982 140.715,112.883 140.715,112.883C142.176,117.694 143.284,118.46 143.284,118.46C145.695,120.153 144.204,115.477 143.869,114.551C142.085,109.631 142.03,107.926 142.03,107.926C144.259,112.347 145.939,112.183 145.939,112.183C148.113,111.489 144.039,105.229 141.652,102.23C140.434,100.702 138.863,98.656 138.407,97.441C137.664,95.383 137.103,88.767 137.103,88.767C136.878,80.96 134.948,77.569 134.948,77.569C131.648,72.287 131.027,62.434 131.027,62.434L130.881,45.799C129.724,34.452 121.363,34.37 121.363,34.37C112.912,33.112 111.736,30.382 111.736,30.382C109.946,27.806 110.969,22.868 110.969,22.868C112.454,21.66 113.027,18.453 113.027,18.453C115.493,16.562 115.372,13.795 114.233,13.825C113.319,13.849 113.526,13.092 113.526,13.092C115.068,0.636 104.01,0 104.01,0L102.322,0C102.322,0 91.259,0.636 92.799,13.089C92.799,13.089 93.006,13.847 92.084,13.822C90.948,13.792 90.842,16.559 93.299,18.45C93.299,18.45 93.871,21.656 95.357,22.865C95.357,22.865 96.38,27.803 94.59,30.379C94.59,30.379 93.418,33.109 84.963,34.367C84.963,34.367 76.588,34.449 75.449,45.796L75.291,62.431C75.291,62.431 74.682,72.284 71.369,77.566C71.369,77.566 69.448,80.958 69.226,88.764C69.226,88.764 68.663,95.38 67.923,97.438C67.472,98.647 65.902,100.693 64.674,102.227C62.266,105.22 58.219,111.467 60.384,112.18C60.384,112.18 62.073,112.344 64.293,107.923C64.293,107.923 64.247,109.616 62.466,114.548C62.116,115.462 60.627,120.138 63.039,118.457C63.039,118.457 64.156,117.69 65.608,112.88C65.608,112.88 64.829,120.979 65.696,121.386C66.829,121.941 67.447,120.339 67.958,113.251C67.958,113.251 68.482,110.962 68.725,119.699C68.737,120.15 69.398,122.397 70.321,120.479C71.1,118.871 70.75,114.615 70.75,113.184C70.75,113.184 71.749,118.706 72.683,118.706C72.683,118.706 73.782,119.997 73.331,113.135C73.258,112.014 73.651,109.713 73.7,109.043L73.806,106.412C73.806,106.412 73.532,103.398 73.532,102.143C73.532,101.832 74.61,97.728 77.453,93.396C77.453,93.396 83.366,82.908 82.985,76.054C82.985,76.054 82.903,69.514 85.284,65.809C85.284,65.809 86.974,84.335 85.829,89.536C85.829,89.536 80.51,102.314 81.683,111.844C82.547,118.938 84.213,134.081 85.909,140.061C86.795,143.155 86.271,150.96 86.981,152.909C87.301,153.756 87.133,154.536 86.445,156.454C84.058,163.164 84.362,167.89 90.366,185.694C90.366,185.694 92.214,189.639 91.28,196.727C91.28,196.727 87.444,204.619 89.901,204.777C89.901,204.777 90.093,205.3 90.924,204.886C90.924,204.886 92.251,206.256 93.685,205.513C93.685,205.513 95.013,206.573 96.148,205.629C96.148,205.629 97.058,206.676 98.385,205.83C98.385,205.83 100.127,207.005 101.162,205.732C101.162,205.732 103.001,206.14 99.727,197.846C99.727,197.846 98.473,189.053 97.782,187.324C96.464,184.049 97.395,175.073 97.676,173.149C98.129,169.933 97.886,164.454 97.058,160.215C96.452,157.177 98.093,151.441 98.699,147.915C99.944,140.492 103.163,117.876 103.163,117.876Z"
          fill="none"
          className="bodyOutline"
          strokeWidth="1.01"
          transform="matrix(1.01087 0 0 1.07204 25.509 -10.487)"
          id="Back"
        />
      </svg>
    </PanelInverted>
  );
}
