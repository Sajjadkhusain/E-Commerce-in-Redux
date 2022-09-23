import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT, Add, REMOVE } from "../redux/actions/action";
const CardsDetails = () => {
  const [data, setData] = useState([]);
  // console.log(data,"chekdatais")
  const dispatch = useDispatch();
  const history = useNavigate();
  const { id } = useParams();
  // console.log(id)
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log("check data,.,.",getdata)
  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
    // console.log(comparedata,"idckh")
  };
  useEffect(() => {
    compare();
  }, [id]);
  // add data
  const send = (e) => {
    // console.log("e-tiem",e)
    dispatch(Add(e));
  };
  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  //remove one

  const remove = (item) => {
    dispatch(REMOVE(item));
  };
  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details page</h2>
      <section className="container mt-3">
        <div className="iteamsdetails">
          {data.map((eles) => {
            return (
              <>
                <div className="items_img">
                  <img src={eles.imgdata} alt="" />
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Restaurant</strong> : {eles.rname}
                        </p>
                        <p>
                          <strong>Price</strong> : ₹ {eles.price}
                        </p>
                        <p>
                          <strong>Dishes</strong> : {eles.address}
                        </p>
                        <p>
                          <strong>Total</strong> : ₹ {eles.price * eles.qnty}
                        </p>
                        <div
                          className="mt-5 d-flex justify-content-between laign-items-center"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            background: "#ddd",
                            color: "#111",
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={
                              eles.qnty <= 1
                                ? () => dlt(eles.id)
                                : () => remove(eles)
                            }
                          >
                            -
                          </span>
                          <span style={{ fontSize: 22 }}>{eles.qnty}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => send(eles)}
                          >
                            +
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating :</strong>
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {eles.rating} ★
                          </span>
                        </p>
                        <p>
                          <strong>Order Review :</strong>
                          <span>{eles.somedata}</span>
                        </p>
                        <p>
                          <strong>Remvoe :</strong>
                          <span>
                            <i
                              className="fas fa-trash"
                              onClick={() => dlt(eles.id)}
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            ></i>
                          </span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;
