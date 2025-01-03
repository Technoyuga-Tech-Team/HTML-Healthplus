import { Field } from "formik";

function CheckBoxComponent({ checkBoxArray }) {

    return (
        <div className="d-flex justify-content-between">
            <div role="group" aria-labelledby="checkbox-group">
                {
                    checkBoxArray?.map((c, index) => {
                        return (
                            <div key={index} style={{ display: "flex", alignItems: "center" }}>
                                <Field
                                    style={{ marginRight: "5px", marginTop: "-15px" }}
                                    type="checkbox"
                                    name="checkbox"
                                />
                                <div
                                    dangerouslySetInnerHTML={{ __html: c?.label }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CheckBoxComponent;
