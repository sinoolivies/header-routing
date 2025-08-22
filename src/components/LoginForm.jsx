import React, { useState } from "react";
import './index.css';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tabs,
  Tab,
} from "react-bootstrap";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaUser,
  FaFileAlt,
  FaTrophy,
  FaCheckCircle,
} from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

import loginImage from "../assets/irucare-image.png";
import logo from "../assets/irucare.png";

// Rwanda Provinces & Districts
const rwandaProvinces = {
  "Kigali City": ["Gasabo", "Kicukiro", "Nyarugenge"],
  "Northern Province": ["Musanze", "Burera", "Rulindo", "Gakenke", "Gicumbi"],
  "Southern Province": ["Huye", "Gisagara", "Kamonyi", "Muhanga", "Nyanza", "Nyaruguru", "Ruhango"],
  "Eastern Province": ["Nyagatare", "Gatsibo", "Kayonza", "Rwamagana", "Bugesera", "Ngoma", "Kirehe"],
  "Western Province": ["Rubavu", "Nyabihu", "Rutsiro", "Ngororero", "Karongi", "Nyamasheke", "Rusizi"],
};

const steps = [
  { icon: <FaBuilding />, label: "Company" },
  { icon: <FaMapMarkerAlt />, label: "Location" },
  { icon: <FaUser />, label: "User" },
  { icon: <FaFileAlt />, label: "Documents" },
  { icon: <FaTrophy />, label: "Finish" },
];

const LoginForm = () => {
  const [key, setKey] = useState("login");
  const [step, setStep] = useState(1);
  const totalSteps = steps.length;
  const [showPassword, setShowPassword] = useState(false); 

  const [formData, setFormData] = useState({
    companyName: "",
    type: "",
    industry: "",
    tin: "",
    phone: "",
    email: "",
    province: "",
    district: "",
    sector: "",
    firstName: "",
    lastName: "",
    userEmail: "",
    userPhone: "",
    title: "",
    idNumber: "",
    logo: null,
    certificate: null,
    idAttachment: null,
  });

  
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validation functions for each step
  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.companyName) newErrors.companyName = "Company Name is required.";
    if (!formData.type) newErrors.type = "Type is required.";
    if (!formData.industry) newErrors.industry = "Industry is required.";
    if (!formData.tin || !/^\d{9}$/.test(formData.tin)) newErrors.tin = "TIN must be 9 digits.";
    if (!formData.phone || !/^\d+$/.test(formData.phone)) newErrors.phone = "Phone number is required and must be digits only.";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "A valid email is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    if (!formData.province) newErrors.province = "Province is required.";
    if (!formData.district) newErrors.district = "District is required.";
    if (!formData.sector) newErrors.sector = "Sector is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.userEmail || !/\S+@\S+\.\S+/.test(formData.userEmail)) newErrors.userEmail = "A valid email is required.";
    if (!formData.userPhone || !/^\d+$/.test(formData.userPhone)) newErrors.userPhone = "Phone number is required and must be digits only.";
    if (!formData.title) newErrors.title = "Title is required.";
    if (!formData.idNumber || !/^\d+$/.test(formData.idNumber)) newErrors.idNumber = "ID Number is required and must be digits only.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors = {};
    if (!formData.certificate) newErrors.certificate = "Certificate is required.";
    if (!formData.idAttachment) newErrors.idAttachment = "ID Attachment is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    let isValid = false;
    if (step === 1) {
      isValid = validateStep1();
    } else if (step === 2) {
      isValid = validateStep2();
    } else if (step === 3) {
      isValid = validateStep3();
    } else if (step === 4) {
      isValid = validateStep4();
    }

    if (isValid) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    setErrors({}); 
  };

  return (
    <Container fluid className="vh-100 d-flex">
      <Row className="flex-grow-1 w-100">
    
        <Col
          xs={12}
          md={6}
          className="d-flex flex-column justify-content-center align-items-center p-4"
        >
          <img src={logo} alt="IRUCARE Logo" style={{ width: "60px" }}  className="bourder-rounded"/>
          <h4 className="fw-bold mt-2">IRUCARE</h4>

          <Tabs
            id="login-register-tabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-4 w-100"
          >
            {/* LOGIN */}
            <Tab eventKey="login" title="Login">
              <h5 className="mt-3">Login</h5>
              <p className="text-muted text-center mb-4">Enter Your Email Address And Password</p>
              <Form className="form-container">
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                    />
                    <span
                      className="position-absolute end-0 top-50 translate-middle-y me-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </Form.Group>
                <div className="text-end mb-4">
                  <a href="#forgot" className="text-decoration-none">Forgot Password?</a>
                </div>
                <Button className="w-100 fw-bold" variant="primary">
                  Login Now
                </Button>
                <div className="text-center mt-3">
                  <span className="text-muted">If You Don't Have An Account Please, </span>
                  <a href="#signup" onClick={() => setKey("register")} className="text-decoration-none">Sign Up Now</a>
                </div>
              </Form>
            </Tab>

            {/* REGISTER */}
            <Tab eventKey="register" title="Register">
              <h5 className="mt-3">Register</h5>
              <p className="text-muted">Register your account</p>

              {/* Step Icons */}
              <div className="d-flex justify-content-between mb-4">
                {steps.map((s, i) => (
                  <div
                    key={i}
                    className={`text-center ${
                      step === i + 1 ? "text-primary" : "text-muted"
                    }`}
                    style={{ flex: 1 }}
                  >
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center mx-auto"
                      style={{
                        width: "40px",
                        height: "40px",
                        background:
                          step > i + 1
                            ? "#4CAF50"
                            : step === i + 1
                            ? "#e7f1ff"
                            : "#f0f0f0",
                        color: step > i + 1 ? "white" : "inherit",
                      }}
                    >
                      {step > i + 1 ? <FaCheckCircle /> : s.icon}
                    </div>
                    <small>{s.label}</small>
                  </div>
                ))}
              </div>

              <Form className="form-container">
                {/* Step 1: Company */}
                {step === 1 && (
                  <>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          isInvalid={!!errors.companyName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.companyName}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label>Type</Form.Label>
                        <Form.Select
                          name="type"
                          value={formData.type}
                          onChange={handleChange}
                          isInvalid={!!errors.type}
                        >
                          <option value="">Select</option>
                          <option value="Private">Private</option>
                          <option value="Public">Public</option>
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.type}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Industry</Form.Label>
                        <Form.Control
                          name="industry"
                          value={formData.industry}
                          onChange={handleChange}
                          isInvalid={!!errors.industry}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.industry}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label>TIN</Form.Label>
                        <Form.Control
                          name="tin"
                          value={formData.tin}
                          onChange={handleChange}
                          isInvalid={!!errors.tin}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.tin}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.phone}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                </>
                )}

                {/* Step 2: Location */}
                {step === 2 && (
                  <>
                    <h6>Company Address</h6>
                    <Form.Group className="mb-3">
                      <Form.Label>Country</Form.Label>
                      <Form.Control value="Rwanda" disabled />
                    </Form.Group>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Province</Form.Label>
                        <Form.Select
                          name="province"
                          value={formData.province}
                          onChange={handleChange}
                          isInvalid={!!errors.province}
                        >
                          <option value="">Select Province</option>
                          {Object.keys(rwandaProvinces).map((prov) => (
                            <option key={prov} value={prov}>
                              {prov}
                            </option>
                          ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.province}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label>District</Form.Label>
                        <Form.Select
                          name="district"
                          value={formData.district}
                          onChange={handleChange}
                          disabled={!formData.province}
                          isInvalid={!!errors.district}
                        >
                          <option value="">Select District</option>
                          {formData.province &&
                            rwandaProvinces[formData.province].map((d) => (
                              <option key={d} value={d}>
                                {d}
                              </option>
                            ))}
                        </Form.Select>
                        <Form.Control.Feedback type="invalid">
                          {errors.district}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Sector</Form.Label>
                        <Form.Control
                          name="sector"
                          value={formData.sector}
                          onChange={handleChange}
                          isInvalid={!!errors.sector}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.sector}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                </>
                )}

                {/* Step 3: User (Contact Person) */}
                {step === 3 && (
                  <>
                    <h6>Contact Person</h6>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          isInvalid={!!errors.firstName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.firstName}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          isInvalid={!!errors.lastName}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.lastName}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="userEmail"
                          value={formData.userEmail}
                          onChange={handleChange}
                          isInvalid={!!errors.userEmail}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.userEmail}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          name="userPhone"
                          value={formData.userPhone}
                          onChange={handleChange}
                          isInvalid={!!errors.userPhone}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.userPhone}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          isInvalid={!!errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.title}
                        </Form.Control.Feedback>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Label>ID Number</Form.Label>
                        <Form.Control
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleChange}
                          isInvalid={!!errors.idNumber}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.idNumber}
                        </Form.Control.Feedback>
                      </Col>
                    </Row>
                </>
                )}

                {/* Step 4: Documents */}
                {step === 4 && (
                  <>
                    <h6 className="mb-4">Upload Documents</h6>
                    <Row>
                      <Col xs={12} sm={6} md={6} className="mb-3">
                        <Form.Label>Upload Logo</Form.Label>
                        <div className="border rounded p-3 text-center bg-light cursor-pointer">
                          <Form.Control
                            type="file"
                            name="logo"
                            onChange={handleFileChange}
                            className="d-none"
                            id="logoUpload"
                          />
                          <label htmlFor="logoUpload" className="text-primary fw-semibold">
                            {formData.logo ? formData.logo.name : "Click to upload"}
                          </label>
                        </div>
                      </Col>
                      <Col xs={12} sm={6} md={6} className="mb-3">
                        <Form.Label>Certificate <span className="text-danger">*</span></Form.Label>
                        <div className={`border rounded p-3 text-center bg-light cursor-pointer ${errors.certificate ? 'border-danger' : ''}`}>
                          <Form.Control
                            type="file"
                            name="certificate"
                            onChange={handleFileChange}
                            className="d-none"
                            id="certificateUpload"
                          />
                          <label htmlFor="certificateUpload" className="text-primary fw-semibold">
                            {formData.certificate ? formData.certificate.name : "Click to upload"}
                          </label>
                        </div>
                        {errors.certificate && <div className="text-danger mt-1" style={{ fontSize: '0.875em' }}>{errors.certificate}</div>}
                      </Col>
                      <Col xs={12} sm={6} md={6} className="mb-3">
                        <Form.Label>ID Attachment <span className="text-danger">*</span></Form.Label>
                        <div className={`border rounded p-3 text-center bg-light cursor-pointer ${errors.idAttachment ? 'border-danger' : ''}`}>
                          <Form.Control
                            type="file"
                            name="idAttachment"
                            onChange={handleFileChange}
                            className="d-none"
                            id="idUpload"
                          />
                          <label htmlFor="idUpload" className="text-primary fw-semibold">
                            {formData.idAttachment ? formData.idAttachment.name : "Click to upload"}
                          </label>
                        </div>
                        {errors.idAttachment && <div className="text-danger mt-1" style={{ fontSize: '0.875em' }}>{errors.idAttachment}</div>}
                      </Col>
                    </Row>
                </>
                )}


                {/* Step 5: Finish */}
                {step === 5 && (
                  <div className="text-center">
                    <h5 className="text-success mb-3">
                      Registration Complete!
                    </h5>
                    <p>
                      Thank you for registering with <b>IRUCARE</b>.  
                        Our team will review your details and contact you soon. Powered by Sino.
                    </p>
                  </div>
                )}

                {/* Navigation */}
                <div className="d-flex justify-content-between mt-3">
                  {step > 1 && (
                    <Button variant="secondary" onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                  {step < totalSteps && (
                    <Button variant="primary" onClick={handleNextStep}>
                      Next
                    </Button>
                  )}
                  {step === totalSteps && (
                    <Button variant="success">Finish</Button>
                  )}
                </div>
              </Form>
            </Tab>
          </Tabs>
        </Col>

        {/* Right Side Image */}
        <Col
          md={6}
          className="d-none d-md-flex text-white justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${loginImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center p-4 bg-opacity-50 rounded">
            <h3 className="fw-bold text-primary">Welcome to IRUCARE</h3>
            <p>
              Multi-industry platform solutions that adapt to your business
              needs across all sectors.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;