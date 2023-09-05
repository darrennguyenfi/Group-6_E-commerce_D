import React from "react";
import Footer from "../components/Footer";
import "../scss/policy.scss";
import { NavLink } from "react-router-dom";

function RefundPolicy() {
  return (
    <div className="cover">
      <header className="signin__header"></header>

      <div className="refund-policy">
        <h1>CHÍNH SÁCH BẢO HÀNH - BỒI HOÀN</h1>
        <h2>Áp dụng cho toàn bộ đơn hàng của Quý Khách tại Hachiko.com</h2>
        <h3>1. Tôi có thể bảo hành sản phẩm tại đâu?</h3>
        <ul>
          <li>
            Bảo hành chính hãng: Đối với các sản phẩm điện tử, đồ chơi điện
            tử,... có tem phiếu cam kết bảo hành từ Hãng, khách hàng có thể mang
            sản phẩm đến trực tiếp Hãng để bảo hành mà không cần thông qua{" "}
            <b>Hachiko.com</b>.
          </li>
          <li>
            Bảo hành thông qua Hachiko.com: khách hàng liên hotline{" "}
            <b>0918628528</b> để được hỗ trợ tư vấn về thực hiện bảo hành.
          </li>
        </ul>
        <h3>2. Tôi có thể được bảo hành sản phẩm miễn phí không?</h3>
        <p>Sản phẩm của quý khách được bảo hành miễn phí chính hãng khi:</p>
        <ul>
          <li>
            Còn thời hạn bảo hành (dựa trên tem/phiếu bảo hành hoặc thời điểm
            kích hoạt bảo hành điện tử).
          </li>
          <li>Tem/phiếu bảo hành còn nguyên vẹn.</li>
          <li>Sản phẩm bị lỗi kỹ thuật.</li>
        </ul>
        <p>Các trường hợp có thể phát sinh phí bảo hành:</p>
        <ul>
          <li>Sản phẩm hết thời hạn bảo hành</li>
          <li>
            Sản phẩm bị bể, biến dạng, cháy, nổ, ẩm thấp trong động cơ hoặc hư
            hỏng trong quá trình sử dụng.
          </li>
          <li>
            Sản phẩm bị hư hỏng do lỗi của người sử dụng, không xuất phát từ lỗi
            vốn có của hàng hóa.
          </li>
        </ul>
        <h3>3. Sau bao lâu tôi có thể nhận lại sản phẩm bảo hành?</h3>
        <p>
          Nếu sản phẩm của quý khách vẫn còn trong thời hạn bảo hành trên team
          phiếu bảo hành của Hãng, Hachiko khuyến khích quý khách gửi trực tiếp
          đến trung tâm của Hãng để được hỗ trợ bảo hành trong thời gian nhanh
          nhất.
        </p>
        <p>
          Trường hợp quý khách gửi hàng về Hachiko.com, thời gian bảo hành dự
          kiến trong vòng 21- 45 ngày tùy thuộc vào điều kiện sẵn có của linh
          kiện thay thế từ nhà sản xuất/lỗi sản phẩm (không tính thời gian vận
          chuyển đi và về).
        </p>
        <h3>4. Hachiko.com bảo hành bằng các hình thức nào?</h3>
        <p>
          Sản phẩm tại <b>Hachiko.com</b> sẽ được bảo hành bằng 1 trong 4 hình
          thức sau:
        </p>
        <ul>
          <li>
            Hóa đơn: khách hàng mang theo hóa đơn trực tiếp hoặc hóa đơn giá trị
            gia tăng có thông tin của sản phẩm để được bảo hành.
          </li>
          <li>
            Phiếu bảo hành: đi kèm theo sản phẩm, có đầy đủ thông tin về nơi bảo
            hành và điều kiện bảo hành.
          </li>
          <li>
            Tem bảo hành: loại tem đặc biệt chỉ sử dụng một lần, được dán trực
            tiếp lên sản phẩm. Sản phẩm còn trong thời hạn bảo hành phải thỏa
            điều kiện tem còn nguyên vẹn và thời gian bảo hành phải trước ngày
            được viết trên tem.
          </li>
          <li>
            Điện tử: là chế độ bảo hành sản phẩm trực tuyến thay thế cho phương
            pháp bảo hành thông thường bằng giấy hay thẻ bảo hành bằng cách:
            nhắn tin SMS kích hoạt, quét mã QR-Code từ tem nhãn, đăng ký trên
            website hoặc bằng ứng dụng bảo hành.
          </li>
        </ul>
        <h3>5. Hachiko.com có bảo hành quà tặng kèm sản phẩm không?</h3>
        <p>
          <b>Hachiko.com</b> rất tiếc hiện chưa hỗ trợ bảo hành quà tặng đi kèm
          sản phẩm chính.
        </p>
        <p>
          <b>Lưu ý:</b> Để đảm bảo quyền lợi khách hàng và <b>Hachiko.com</b> có
          cơ sở làm việc với các bộ phận liên quan, tất cả yêu cầu bảo hành quý
          khách cần cung cấp hình ảnh/clip sản phẩm lỗi. <b>Hachiko.com</b> xin
          phép từ chối khi chưa nhận đủ thông tin hình ảnh từ quý khách.
        </p>
      </div>
      <button className="Backbtn">
        <NavLink to="/" className="link_decorate">
          Back
        </NavLink>
      </button>
      <Footer />
    </div>
  );
}

export default RefundPolicy;
