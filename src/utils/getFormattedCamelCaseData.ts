import camelcaseKeys from "camelcase-keys";

// ToDo: data의 타입 생객하봐야함
const getFormattedCamelCaseData = (data: any) => {
    const formattedData = camelcaseKeys(data, {
        deep: true,
    });
    return formattedData;
};

export default getFormattedCamelCaseData;
