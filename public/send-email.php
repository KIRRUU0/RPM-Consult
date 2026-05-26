<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get the post data
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!empty($data['name']) && !empty($data['email']) && !empty($data['message'])) {
        $to = "admin@rpm-consult.com";
        $subject = "RPM Consult - Hubungi Kami: " . strip_tags($data['service']);
        
        $message = "
        <html>
        <head>
          <title>RPM Consult - Contact Form Submission</title>
        </head>
        <body style='font-family: Arial, sans-serif; color: #191c1b; line-height: 1.6;'>
          <div style='max-width: 600px; margin: 0 auto; border: 1px solid #e1e3e1; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);'>
            <div style='background-color: #006b2c; padding: 20px; text-align: center; color: white;'>
              <h2 style='margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;'>Pesan Baru Hubungi Kami</h2>
            </div>
            <div style='padding: 24px; background-color: #ffffff;'>
              <table style='width: 100%; border-collapse: collapse;'>
                <tr style='background-color: #f8faf8;'>
                  <td style='padding: 12px; font-weight: bold; width: 120px; border-bottom: 1px solid #f2f4f2;'>Nama:</td>
                  <td style='padding: 12px; border-bottom: 1px solid #f2f4f2;'>" . htmlspecialchars($data['name']) . "</td>
                </tr>
                <tr>
                  <td style='padding: 12px; font-weight: bold; border-bottom: 1px solid #f2f4f2;'>Email:</td>
                  <td style='padding: 12px; border-bottom: 1px solid #f2f4f2;'><a href='mailto:" . htmlspecialchars($data['email']) . "' style='color: #006b2c; text-decoration: none;'>" . htmlspecialchars($data['email']) . "</a></td>
                </tr>
                <tr style='background-color: #f8faf8;'>
                  <td style='padding: 12px; font-weight: bold; border-bottom: 1px solid #f2f4f2;'>Layanan:</td>
                  <td style='padding: 12px; border-bottom: 1px solid #f2f4f2;'>" . htmlspecialchars($data['service']) . "</td>
                </tr>
                <tr>
                  <td style='padding: 12px; font-weight: bold; vertical-align: top;'>Pesan:</td>
                  <td style='padding: 12px; white-space: pre-line;'>" . nl2br(htmlspecialchars($data['message'])) . "</td>
                </tr>
              </table>
            </div>
            <div style='background-color: #f2f4f2; padding: 12px; text-align: center; font-size: 11px; color: #6e7a6d; border-top: 1px solid #e1e3e1;'>
              Dikirim otomatis dari Form Kontak Website RPM Consult.
            </div>
          </div>
        </body>
        </html>
        ";

        // HTML email headers
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= "From: Website Contact Form <no-reply@rpm-consult.com>" . "\r\n";
        $headers .= "Reply-To: " . strip_tags($data['email']) . "\r\n";

        if (mail($to, $subject, $message, $headers)) {
            echo json_encode(["status" => "success", "message" => "Email sent successfully."]);
        } else {
            http_response_code(500);
            echo json_encode(["status" => "error", "message" => "Failed to send email via mail()."]);
        }
    } else {
        http_response_code(400);
        echo json_encode(["status" => "error", "message" => "Invalid input data."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
}
?>
